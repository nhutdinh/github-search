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
  score: number;
}
export interface UserSearchState {
  searchStr: string;
  results: User[];
  loading: boolean;
  error: string;
}

export type UserSearchActionTypes =
  | SearchUsersAction
  | SearchUsersActionOK
  | SearchUsersActionError;

export enum UserSearchActions {
  SEARCH_USERS = "@UserSearch/SEARCH_USERS",
  GET_USER = "@UserSearch/GET_USER",
  SEARCH_USERS_OK = "@UserSearch/SEARCH_USERS_OK",
  SEARCH_USERS_ERROR = "@UserSearch/SEARCH_USERS_ERROR",
}
export interface SearchUsersAction {
  type: UserSearchActions.SEARCH_USERS;
  payload: string;
}
export interface SearchUsersActionOK {
  type: UserSearchActions.SEARCH_USERS_OK;
  payload: User[];
}

export interface SearchUsersActionError {
  type: UserSearchActions.SEARCH_USERS_ERROR;
  payload: string;
}

export interface getUser {
  type: UserSearchActions.GET_USER;
  payload: string;
}
