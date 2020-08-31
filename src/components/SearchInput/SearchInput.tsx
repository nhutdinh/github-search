import React from "react";
import {
  SearchInputSuggestionStyled,
  SearchInputStyled,
  SearchInputSuggestionItemStyled,
} from "./SearchInput.styled";
import SearchSvg from "../Icons/SearchSvg";
import debounce from "lodash.debounce";

export interface SerachResultItem {
  id: number | string;
  value: string;
}
interface SearchInputProps {
  searchResult: SerachResultItem[];
  onSearch: (query: string) => void;
  onSelectItem: (value: string) => void;
}
const SearchInput: React.FC<SearchInputProps> = (
  props: SearchInputProps
): React.ReactElement => {
  const searchInputRef = React.useRef<HTMLInputElement>(null);
  const dataRef = React.useRef<{ originInputValue: string }>({
    originInputValue: "",
  });
  const [searchStr, setSearchStr] = React.useState<string>("");
  const [activeIndex, setActiveIndex] = React.useState<number>(0);
  const [showSugesstions, setShowSugesstions] = React.useState<boolean>(false);

  const onItemClicked = (index: number) => {
    const item = props.searchResult[index];
    setSearchStr(item.value);
    props.onSelectItem(item.value);
    setShowSugesstions(false);
  };
  const searchDebounced = React.useCallback(debounce(props.onSearch, 200), [
    props.onSearch,
  ]);

  const onSerachInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    searchDebounced(event.target.value);
    setActiveIndex(0);
    setSearchStr(event.target.value);
    if (dataRef && dataRef.current) {
      dataRef.current.originInputValue = event.target.value;
    }
  };
  const updateInput = (value: string) => {
    setSearchStr(value);
    setTimeout(() => {
      searchInputRef &&
        searchInputRef.current &&
        searchInputRef.current.setSelectionRange(value.length, value.length);
    }, 0);
  };
  const onSearchInputKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === "Enter") {
      props.onSelectItem(event.currentTarget.value);
      setShowSugesstions(false);
    }
    if (event.key === "Escape") {
      setShowSugesstions(false);
      setSearchStr(dataRef.current.originInputValue);
    }
    if (!showSugesstions) {
      return;
    }
    if (event.key === "ArrowUp") {
      const index =
        activeIndex === 0 ? props.searchResult.length - 1 : activeIndex - 1;
      setActiveIndex(index);
      updateInput(props.searchResult[index || 0].value);
    }
    if (event.key === "ArrowDown") {
      const index =
        activeIndex === props.searchResult.length - 1 ? 0 : activeIndex + 1;
      setActiveIndex(index);
      updateInput(props.searchResult[index].value);
    }
  };

  React.useEffect((): void => {
    setShowSugesstions(props.searchResult.length > 0);
  }, [props.searchResult.length]);

  return (
    <SearchInputStyled showSugesstions={showSugesstions}>
      <SearchSvg />
      <input
        placeholder="Search user..."
        ref={searchInputRef}
        value={searchStr}
        onChange={onSerachInputChange}
        onKeyDown={onSearchInputKeyDown}
        data-testid="search-input__input"
      />
      {showSugesstions && (
        <SearchInputSuggestionStyled data-testid="search-input__suggestions">
          {props.searchResult.map((item, index) => (
            <SearchInputSuggestionItemStyled
              data-testid="search-input__suggestions__item"
              isActive={index === activeIndex}
              key={item.id}
              onClick={(): void => {
                onItemClicked(index);
              }}
            >
              <div>{item.value}</div>
            </SearchInputSuggestionItemStyled>
          ))}
        </SearchInputSuggestionStyled>
      )}
    </SearchInputStyled>
  );
};
export default SearchInput;
