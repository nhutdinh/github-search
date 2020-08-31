import { all } from "redux-saga/effects";
import { userSearchSaga } from "./UserSerach/UserSearch.saga";
import { userOverviewSaga } from "./User/UserOverview/UserOverview.saga";
import { userRepositoriesSaga } from "./User/UserRepositories/UserRepositories.saga";
import { userOrganizationsSaga } from "./User/UserOrganizations/UserOrganizations.saga";

export default function* rootSaga() {
  yield all([
    userSearchSaga(),
    userOverviewSaga(),
    userRepositoriesSaga(),
    userOrganizationsSaga(),
  ]);
}
