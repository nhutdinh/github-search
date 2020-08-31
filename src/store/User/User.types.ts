import { UserRepositoriesState } from "./UserRepositories/UserRepositories.types";
import { UserOverviewState } from "./UserOverview/UserOverview.types";
import { UserOrganizationsState } from "./UserOrganizations/UserOrganizations.types";

export interface UserState {
  overview: UserOverviewState;
  repoData: UserRepositoriesState;
  orgsData: UserOrganizationsState;
}
