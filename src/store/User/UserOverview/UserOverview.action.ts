import {
  GetUserOverviewAction,
  GetUserOverviewActionError,
  GetUserOverviewActionOK,
  User,
  UserOverviewActions,
} from "./UserOverview.types";

export const getUserOverview = (searchStr: string): GetUserOverviewAction => ({
  type: UserOverviewActions.GET_USER_OVERVIEW,
  payload: searchStr,
});

export const getUserOverviewOK = (users: User[]): GetUserOverviewActionOK => ({
  type: UserOverviewActions.GET_USER_OVERVIEW_OK,
  payload: users,
});

export const getUserOverviewError = (
  error: string
): GetUserOverviewActionError => ({
  type: UserOverviewActions.GET_USER_OVERVIEW_ERROR,
  payload: error,
});
