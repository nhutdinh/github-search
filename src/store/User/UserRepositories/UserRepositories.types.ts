export interface Repository {
  id: number;
  name: string;
  description: string;
  stargazers_count: number;
  language: string;
  forks: number;
  html_url: string;
}
export interface UserRepositoriesState {
  loading: boolean;
  repos: Repository[];
  error: string;
  page: number;
  lastPage: number;
}

export type UserRepositoriesActionTypes =
  | GetUserRepositoriesAction
  | GetMoreUserRepositoriesAction
  | ResetUserRepositoriesAction
  | GetUserRepositoriesActionOK
  | GetMoreUserRepositoriesActionOK
  | GetUserRepositoriesActionError;

export enum UserRepositoriesActions {
  GET_USER_REPOSITORIES = "@UserRepositories/GET_USER_REPOSITORIES",
  RESET_USER_REPOSITORIES = "@UserRepositories/RESET_USER_REPOSITORIES",
  GET_MORE_USER_REPOSITORIES = "@UserRepositories/GET_MORE_USER_REPOSITORIES",
  GET_USER_REPOSITORIES_OK = "@UserRepositories/GET_USER_REPOSITORIES_OK",
  GET_MORE_USER_REPOSITORIES_OK = "@UserRepositories/GET_MORE_USER_REPOSITORIES_OK",
  GET_USER_REPOSITORIES_ERROR = "@UserRepositories/GET_USER_REPOSITORIES_ERROR",
}
export interface GetUserRepositoriesParams {
  username: string;
  page?: number;
}
export interface GetUserRepositoriesAction {
  type: UserRepositoriesActions.GET_USER_REPOSITORIES;
  payload: GetUserRepositoriesParams;
}

export interface ResetUserRepositoriesAction {
  type: UserRepositoriesActions.RESET_USER_REPOSITORIES;
}

export interface GetMoreUserRepositoriesAction {
  type: UserRepositoriesActions.GET_MORE_USER_REPOSITORIES;
  payload: GetUserRepositoriesParams;
}
export interface GetUserRepositoriesActionOK {
  type: UserRepositoriesActions.GET_USER_REPOSITORIES_OK;
  payload: { repos: Repository[]; lastPage: number };
}
export interface GetMoreUserRepositoriesActionOK {
  type: UserRepositoriesActions.GET_MORE_USER_REPOSITORIES_OK;
  payload: Repository[];
}

export interface GetUserRepositoriesActionError {
  type: UserRepositoriesActions.GET_USER_REPOSITORIES_ERROR;
  payload: string;
}
