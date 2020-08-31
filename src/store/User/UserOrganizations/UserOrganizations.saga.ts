import axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import {
  GetUserOrganizationsAction,
  UserOrganizationsActions,
  GetUserOrganizationsParams,
} from "./UserOrganizations.types";
import {
  getUserOrganizationsOK,
  getUserOrganizationsError,
  getMoreUserOrganizationsOK,
} from "./UserOrganizations.action";
import { getLastPage } from "../../../utils/api.ultils";

const getOrganizations = async (params: GetUserOrganizationsParams) => {
  return axios.get(
    `https://api.github.com/users/${params.username}/orgs?per_page=20&page=${params.page}`
  );
};

export function* handleGetOrganizationsSaga(
  action: GetUserOrganizationsAction
) {
  try {
    const response = yield call(getOrganizations, action.payload);
    yield put(getUserOrganizationsOK(response.data, getLastPage(response)));
  } catch (err) {
    yield put(getUserOrganizationsError("error"));
  }
}

export function* handleGetMoreOrganizationsSaga(
  action: GetUserOrganizationsAction
) {
  try {
    const response = yield call(getOrganizations, action.payload);
    yield put(getMoreUserOrganizationsOK(response.data));
  } catch (err) {
    yield put(getUserOrganizationsError("error"));
  }
}
export function* userOrganizationsSaga() {
  yield takeEvery(
    UserOrganizationsActions.GET_USER_ORGANIZATIONS,
    handleGetOrganizationsSaga
  );

  yield takeEvery(
    UserOrganizationsActions.GET_MORE_USER_ORGANIZATIONS,
    handleGetMoreOrganizationsSaga
  );
}
