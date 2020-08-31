import axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import {
  getMoreUserRepositoriesOK,
  getUserRepositoriesError,
  getUserRepositoriesOK,
} from "./UserRepositories.action";
import {
  GetUserRepositoriesAction,
  GetUserRepositoriesParams,
  UserRepositoriesActions,
} from "./UserRepositories.types";
import { getLastPage } from "../../../utils/api.ultils";

const getRepositories = async (params: GetUserRepositoriesParams) => {
  return axios.get(
    `https://api.github.com/users/${params.username}/repos?per_page=20&page=${params.page}`
  );
};

export function* handleGetRepositorySaga(action: GetUserRepositoriesAction) {
  try {
    const response = yield call(getRepositories, action.payload);
    yield put(getUserRepositoriesOK(response.data, getLastPage(response)));
  } catch (err) {
    yield put(getUserRepositoriesError("error"));
  }
}

export function* handleGetMoreRepositorySaga(
  action: GetUserRepositoriesAction
) {
  try {
    const response = yield call(getRepositories, action.payload);
    yield put(getMoreUserRepositoriesOK(response.data));
  } catch (err) {
    yield put(getUserRepositoriesError("error"));
  }
}
export function* userRepositoriesSaga() {
  yield takeEvery(
    UserRepositoriesActions.GET_USER_REPOSITORIES,
    handleGetRepositorySaga
  );

  yield takeEvery(
    UserRepositoriesActions.GET_MORE_USER_REPOSITORIES,
    handleGetMoreRepositorySaga
  );
}
