import { fireEvent, render } from "@testing-library/react";
import React from "react";
import SearchInput from "./SearchInput";

describe("should render successfully", () => {
  test("should render", () => {
    const props = {
      searchResult: [],
      onSearch: jest.fn(),
      onSelectItem: jest.fn(),
    };
    const { getByTestId, getByPlaceholderText } = render(
      <SearchInput {...props}></SearchInput>
    );
    expect(getByTestId("search-input__input")).toBeInTheDocument();
    expect(getByPlaceholderText("Search user...")).toBeTruthy();
    expect(getByTestId("search-svg")).toBeInTheDocument();
  });
});
describe("should behave correctly", () => {
  const highlightedCSS = "background-color :rgba(32, 33, 36, 0.28)";
  test("should show suggestions if searchResult is not empty", () => {
    const props = {
      searchResult: [
        { id: 1, value: "1" },
        { id: 2, value: "2" },
      ],
      onSearch: jest.fn(),
      onSelectItem: jest.fn(),
    };
    const { getByTestId, getAllByTestId } = render(
      <SearchInput {...props}></SearchInput>
    );
    expect(getByTestId("search-input__suggestions")).toBeInTheDocument();
    //first item in the suggestions list should be highlighted
    expect(getAllByTestId("search-input__suggestions__item")).toHaveLength(2);
    expect(getAllByTestId("search-input__suggestions__item")[0]).toHaveStyle(
      highlightedCSS
    );
  });

  test("should highlight item when user press on Arrow Up/Down button", () => {
    const props = {
      searchResult: [
        { id: 1, value: "1" },
        { id: 2, value: "2" },
        { id: 3, value: "3" },
      ],
      onSearch: jest.fn(),
      onSelectItem: jest.fn(),
    };
    const { getByTestId, getAllByTestId } = render(
      <SearchInput {...props}></SearchInput>
    );
    const input = getByTestId("search-input__input");

    for (let i = 1; i <= 3; i++) {
      fireEvent.keyDown(input, {
        key: "ArrowDown",
        code: "ArrowDown",
      });
      const index = i === 3 ? 0 : i;
      expect(
        getAllByTestId("search-input__suggestions__item")[index]
      ).toHaveStyle(highlightedCSS);
      expect(input).toHaveValue(props.searchResult[index].value);
    }

    for (let i = 0; i <= 2; i++) {
      fireEvent.keyDown(input, {
        key: "ArrowUp",
        code: "ArrowUp",
      });
      expect(
        getAllByTestId("search-input__suggestions__item")[2 - i]
      ).toHaveStyle(highlightedCSS);
      expect(input).toHaveValue(props.searchResult[2 - i].value);
    }
  });

  test("should hide sugesstions when user hits Enter", () => {
    const props = {
      searchResult: [
        { id: 1, value: "1" },
        { id: 2, value: "2" },
        { id: 3, value: "3" },
      ],
      onSearch: jest.fn(),
      onSelectItem: jest.fn(),
    };
    const { getByTestId, queryByTestId } = render(
      <SearchInput {...props}></SearchInput>
    );
    const input = getByTestId("search-input__input");
    fireEvent.change(input, { target: { value: "123" } });
    fireEvent.keyDown(input, {
      key: "Enter",
      code: "Enter",
    });
    expect(queryByTestId("search-input__suggestions")).not.toBeInTheDocument();
    expect(props.onSelectItem).toHaveBeenCalledWith("123");
  });

  test("should hide sugesstions when user hits Esc key", () => {
    const props = {
      searchResult: [
        { id: 1, value: "1" },
        { id: 2, value: "2" },
        { id: 3, value: "3" },
      ],
      onSearch: jest.fn(),
      onSelectItem: jest.fn(),
    };
    const { getByTestId, queryByTestId } = render(
      <SearchInput {...props}></SearchInput>
    );
    const input = getByTestId("search-input__input");
    fireEvent.change(input, { target: { value: "123" } });

    fireEvent.keyDown(input, {
      key: "ArrowDown",
      code: "ArrowDown",
    });
    expect(input).toHaveValue("2");

    fireEvent.keyDown(input, {
      key: "Escape",
      code: "Escape",
    });
    expect(queryByTestId("search-input__suggestions")).not.toBeInTheDocument();

    expect(input).toHaveValue("123");
  });
});
