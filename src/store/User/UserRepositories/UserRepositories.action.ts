import {
  GetUserRepositoriesAction,
  GetUserRepositoriesActionError,
  GetUserRepositoriesActionOK,
  Repository,
  UserRepositoriesActions,
  GetUserRepositoriesParams,
  ResetUserRepositoriesAction,
  GetMoreUserRepositoriesAction,
  GetMoreUserRepositoriesActionOK,
} from "./UserRepositories.types";

export const getUserRepositories = (
  params: GetUserRepositoriesParams
): GetUserRepositoriesAction => ({
  type: UserRepositoriesActions.GET_USER_REPOSITORIES,
  payload: params,
});

export const getMoreUserRepositories = (
  params: GetUserRepositoriesParams
): GetMoreUserRepositoriesAction => ({
  type: UserRepositoriesActions.GET_MORE_USER_REPOSITORIES,
  payload: params,
});

export const resetUserRepositories = (): ResetUserRepositoriesAction => ({
  type: UserRepositoriesActions.RESET_USER_REPOSITORIES,
});

export const getUserRepositoriesOK = (
  repos: Repository[],
  lastPage: number
): GetUserRepositoriesActionOK => ({
  type: UserRepositoriesActions.GET_USER_REPOSITORIES_OK,
  payload: { repos, lastPage },
});

export const getMoreUserRepositoriesOK = (
  repos: Repository[]
): GetMoreUserRepositoriesActionOK => ({
  type: UserRepositoriesActions.GET_MORE_USER_REPOSITORIES_OK,
  payload: repos,
});

export const getUserRepositoriesError = (
  error: string
): GetUserRepositoriesActionError => ({
  type: UserRepositoriesActions.GET_USER_REPOSITORIES_ERROR,
  payload: error,
});
