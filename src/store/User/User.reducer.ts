import { combineReducers } from "redux";
import userOverviewReducer from "./UserOverview/UserOverview.reducer";
import userRepositoriesReducer from "./UserRepositories/UserRepositories.reducer";
import userOrganizationsReducer from "./UserOrganizations/UserOrganizations.reducer";

const userReducer = combineReducers({
  overview: userOverviewReducer,
  repoData: userRepositoriesReducer,
  orgsData: userOrganizationsReducer,
});
export default userReducer;
