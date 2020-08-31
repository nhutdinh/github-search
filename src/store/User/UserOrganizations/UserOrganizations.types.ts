export interface Organization {
  id: number;
  login: string;
  description: string;
  url: string;
  avatar_url: string;
}
export interface UserOrganizationsState {
  loading: boolean;
  orgs: Organization[];
  error: string;
  page: number;
  lastPage: number;
}

export type UserOrganizationsActionTypes =
  | GetUserOrganizationsAction
  | GetMoreUserOrganizationsAction
  | ResetUserOrganizationsAction
  | GetUserOrganizationsActionOK
  | GetMoreUserOrganizationsActionOK
  | GetUserOrganizationsActionError;

export enum UserOrganizationsActions {
  GET_USER_ORGANIZATIONS = "@UserOrganizations/GET_USER_ORGANIZATIONS",
  RESET_USER_ORGANIZATIONS = "@UserOrganizations/RESET_USER_ORGANIZATIONS",
  GET_MORE_USER_ORGANIZATIONS = "@UserOrganizations/GET_MORE_USER_ORGANIZATIONS",
  GET_USER_ORGANIZATIONS_OK = "@UserOrganizations/GET_USER_ORGANIZATIONS_OK",
  GET_MORE_USER_ORGANIZATIONS_OK = "@UserOrganizations/GET_MORE_USER_ORGANIZATIONS_OK",
  GET_USER_ORGANIZATIONS_ERROR = "@UserOrganizations/GET_USER_ORGANIZATIONS_ERROR",
}
export interface GetUserOrganizationsParams {
  username: string;
  page?: number;
}
export interface GetUserOrganizationsAction {
  type: UserOrganizationsActions.GET_USER_ORGANIZATIONS;
  payload: GetUserOrganizationsParams;
}

export interface ResetUserOrganizationsAction {
  type: UserOrganizationsActions.RESET_USER_ORGANIZATIONS;
}

export interface GetMoreUserOrganizationsAction {
  type: UserOrganizationsActions.GET_MORE_USER_ORGANIZATIONS;
  payload: GetUserOrganizationsParams;
}
export interface GetUserOrganizationsActionOK {
  type: UserOrganizationsActions.GET_USER_ORGANIZATIONS_OK;
  payload: { orgs: Organization[]; lastPage: number };
}
export interface GetMoreUserOrganizationsActionOK {
  type: UserOrganizationsActions.GET_MORE_USER_ORGANIZATIONS_OK;
  payload: Organization[];
}

export interface GetUserOrganizationsActionError {
  type: UserOrganizationsActions.GET_USER_ORGANIZATIONS_ERROR;
  payload: string;
}
