import axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import {
  GetUserOverviewAction,
  UserOverviewActions,
} from "./UserOverview.types";
import { getUserOverviewOK, getUserOverviewError } from "./UserOverview.action";

export const getUserOverview = async (userName: string) => {
  return axios.get(`https://api.github.com/users/${userName}`);
};

export function* handleGetUserOverviewSaga(action: GetUserOverviewAction) {
  try {
    const response = yield call(getUserOverview, action.payload);
    yield put(getUserOverviewOK(response.data));
  } catch (err) {
    yield put(getUserOverviewError(err));
  }
}
export function* userOverviewSaga() {
  yield takeEvery(
    UserOverviewActions.GET_USER_OVERVIEW,
    handleGetUserOverviewSaga
  );
}
