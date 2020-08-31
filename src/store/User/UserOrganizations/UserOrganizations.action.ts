import {
  GetUserOrganizationsAction,
  GetUserOrganizationsActionError,
  GetUserOrganizationsActionOK,
  Organization,
  UserOrganizationsActions,
  GetUserOrganizationsParams,
  ResetUserOrganizationsAction,
  GetMoreUserOrganizationsAction,
  GetMoreUserOrganizationsActionOK,
} from "./UserOrganizations.types";

export const getUserOrganizations = (
  params: GetUserOrganizationsParams
): GetUserOrganizationsAction => ({
  type: UserOrganizationsActions.GET_USER_ORGANIZATIONS,
  payload: params,
});

export const getMoreUserOrganizations = (
  params: GetUserOrganizationsParams
): GetMoreUserOrganizationsAction => ({
  type: UserOrganizationsActions.GET_MORE_USER_ORGANIZATIONS,
  payload: params,
});

export const resetUserOrganizations = (): ResetUserOrganizationsAction => ({
  type: UserOrganizationsActions.RESET_USER_ORGANIZATIONS,
});

export const getUserOrganizationsOK = (
  orgs: Organization[],
  lastPage: number
): GetUserOrganizationsActionOK => ({
  type: UserOrganizationsActions.GET_USER_ORGANIZATIONS_OK,
  payload: { orgs, lastPage },
});

export const getMoreUserOrganizationsOK = (
  orgs: Organization[]
): GetMoreUserOrganizationsActionOK => ({
  type: UserOrganizationsActions.GET_MORE_USER_ORGANIZATIONS_OK,
  payload: orgs,
});

export const getUserOrganizationsError = (
  error: string
): GetUserOrganizationsActionError => ({
  type: UserOrganizationsActions.GET_USER_ORGANIZATIONS_ERROR,
  payload: error,
});
