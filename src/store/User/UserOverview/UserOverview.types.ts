export interface User {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
  name: string;
  company: string;
  blog: string;
  location: string;
  email?: any;
  hireable?: any;
  bio?: any;
  twitter_username: string;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: string;
  updated_at: string;
}
export interface UserOverviewState {
  userName: string;
  loading: boolean;
  user?: User;
  error: string;
}

export type UserOverviewActionTypes =
  | GetUserOverviewAction
  | GetUserOverviewActionOK
  | GetUserOverviewActionError;

export enum UserOverviewActions {
  GET_USER_OVERVIEW = "@UserOverview/GET_USER_OVERVIEW",
  GET_USER_OVERVIEW_OK = "@UserOverview/GET_USER_OVERVIEW_OK",
  GET_USER_OVERVIEW_ERROR = "@UserOverview/GET_USER_OVERVIEW_ERROR",
}
export interface GetUserOverviewAction {
  type: UserOverviewActions.GET_USER_OVERVIEW;
  payload: string;
}
export interface GetUserOverviewActionOK {
  type: UserOverviewActions.GET_USER_OVERVIEW_OK;
  payload: User[];
}

export interface GetUserOverviewActionError {
  type: UserOverviewActions.GET_USER_OVERVIEW_ERROR;
  payload: string;
}
