import {
  UserSearchActions,
  UserSearchActionTypes,
  UserSearchState,
} from "./UserSerach.types";
const initState: UserSearchState = {
  searchStr: "",
  results: [],
  loading: true,
  error: "",
};
const userSearchReducer = (
  state: UserSearchState = initState,
  action: UserSearchActionTypes
) => {
  switch (action.type) {
    case UserSearchActions.SEARCH_USERS:
      return {
        ...state,
        searchStr: action.payload,
        results: [],
        loading: true,
      };
    case UserSearchActions.SEARCH_USERS_OK:
      return {
        ...state,
        results: action.payload,
        loading: false,
      };
    case UserSearchActions.SEARCH_USERS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default userSearchReducer;
