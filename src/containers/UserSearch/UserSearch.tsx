import React from "react";
import { useDispatch, useSelector } from "react-redux";
import SearchInput, {
  SerachResultItem,
} from "../../components/SearchInput/SearchInput";
import { ApplicationState } from "../../store/store";
import { getUserOverview } from "../../store/User/UserOverview/UserOverview.action";
import { searchUser } from "../../store/UserSerach/UserSerach.action";

const UserSearch: React.FC = (): React.ReactElement => {
  const dispatch = useDispatch();
  const searchResults = useSelector<ApplicationState, SerachResultItem[]>(
    (state) =>
      state.userSearch.results.map((item) => ({
        id: item.id,
        value: item.login,
      }))
  );

  const doSearch = (query: string) => {
    dispatch(searchUser(query));
  };
  const doShowUser = (userName: string) => {
    dispatch(getUserOverview(userName));
  };

  return (
    <div data-testid="user-search">
      <SearchInput
        searchResult={searchResults}
        onSearch={doSearch}
        onSelectItem={doShowUser}
      ></SearchInput>
    </div>
  );
};
export default UserSearch;
