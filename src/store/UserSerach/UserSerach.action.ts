import {
  SearchUsersAction,
  SearchUsersActionError,
  SearchUsersActionOK,
  User,
  UserSearchActions,
} from "./UserSerach.types";

export const searchUser = (searchStr: string): SearchUsersAction => ({
  type: UserSearchActions.SEARCH_USERS,
  payload: searchStr,
});

export const searchUserOK = (users: User[]): SearchUsersActionOK => ({
  type: UserSearchActions.SEARCH_USERS_OK,
  payload: users,
});

export const searchUserError = (error: string): SearchUsersActionError => ({
  type: UserSearchActions.SEARCH_USERS_ERROR,
  payload: error,
});

export const selectUser = (searchStr: string): SearchUsersAction => ({
  type: UserSearchActions.SEARCH_USERS,
  payload: searchStr,
});
