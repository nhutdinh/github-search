import {
  UserOverviewActionTypes,
  UserOverviewActions,
  UserOverviewState,
} from "./UserOverview.types";

const initState: UserOverviewState = {
  userName: "",
  loading: true,
  error: "",
};

const userOverviewReducer = (
  state: UserOverviewState = initState,
  action: UserOverviewActionTypes
) => {
  switch (action.type) {
    case UserOverviewActions.GET_USER_OVERVIEW:
      return {
        ...state,
        userName: action.payload,
        loading: true,
      };
    case UserOverviewActions.GET_USER_OVERVIEW_OK:
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    case UserOverviewActions.GET_USER_OVERVIEW_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default userOverviewReducer;
