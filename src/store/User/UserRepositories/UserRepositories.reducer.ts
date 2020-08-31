import {
  UserRepositoriesActions,
  UserRepositoriesActionTypes,
  UserRepositoriesState,
} from "./UserRepositories.types";
const initState: UserRepositoriesState = {
  repos: [],
  loading: true,
  error: "",
  page: 1,
  lastPage: 0,
};
const userRepositoriesReducer = (
  state: UserRepositoriesState = initState,
  action: UserRepositoriesActionTypes
) => {
  switch (action.type) {
    case UserRepositoriesActions.GET_USER_REPOSITORIES:
    case UserRepositoriesActions.GET_MORE_USER_REPOSITORIES:
      return {
        ...state,
        loading: true,
      };

    case UserRepositoriesActions.GET_MORE_USER_REPOSITORIES_OK:
      return {
        ...state,
        loading: false,
        page: state.page + 1,
        repos: [...state.repos, ...action.payload],
      };

    case UserRepositoriesActions.GET_USER_REPOSITORIES_OK:
      return {
        ...state,
        repos: action.payload.repos,
        loading: false,
        lastPage: action.payload.lastPage,
      };
    case UserRepositoriesActions.GET_USER_REPOSITORIES_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case UserRepositoriesActions.RESET_USER_REPOSITORIES:
      return {
        ...state,
        loading: false,
        error: "",
        page: 0,
      };
    default:
      return state;
  }
};
export default userRepositoriesReducer;
