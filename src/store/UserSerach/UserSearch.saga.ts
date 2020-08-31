import axios from "axios";
import { call, put, takeLatest } from "redux-saga/effects";
import { searchUserError, searchUserOK } from "./UserSerach.action";
import { SearchUsersAction, UserSearchActions } from "./UserSerach.types";

const requestSearch = async (searchStr: string) => {
  return axios.get(
    `https://api.github.com/search/users?q=${searchStr} in:login&per_page=10`
  );
};

export function* handleSearchUsersSaga(action: SearchUsersAction) {
  if (!action.payload) {
    yield put(searchUserOK([]));
    return;
  }
  try {
    const response = yield call(requestSearch, action.payload);
    yield put(searchUserOK(response.data.items));
  } catch (err) {
    yield put(searchUserError(err));
  }
}
export function* userSearchSaga() {
  yield takeLatest(UserSearchActions.SEARCH_USERS, handleSearchUsersSaga);
}
