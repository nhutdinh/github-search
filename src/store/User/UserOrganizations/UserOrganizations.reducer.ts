import {
  UserOrganizationsActions,
  UserOrganizationsActionTypes,
  UserOrganizationsState,
} from "./UserOrganizations.types";
const initState: UserOrganizationsState = {
  orgs: [],
  loading: true,
  error: "",
  page: 1,
  lastPage: 0,
};
const userOrganizationsReducer = (
  state: UserOrganizationsState = initState,
  action: UserOrganizationsActionTypes
) => {
  switch (action.type) {
    case UserOrganizationsActions.GET_USER_ORGANIZATIONS:
    case UserOrganizationsActions.GET_MORE_USER_ORGANIZATIONS:
      return {
        ...state,
        loading: true,
      };

    case UserOrganizationsActions.GET_MORE_USER_ORGANIZATIONS_OK:
      return {
        ...state,
        loading: false,
        page: state.page + 1,
        orgs: [...state.orgs, ...action.payload],
      };

    case UserOrganizationsActions.GET_USER_ORGANIZATIONS_OK:
      return {
        ...state,
        orgs: action.payload.orgs,
        loading: false,
        lastPage: action.payload.lastPage,
      };
    case UserOrganizationsActions.GET_USER_ORGANIZATIONS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case UserOrganizationsActions.RESET_USER_ORGANIZATIONS:
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
export default userOrganizationsReducer;
