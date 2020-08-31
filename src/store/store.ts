import { UserSearchState } from "./UserSerach/UserSerach.types";
import { UserState } from "./User/User.types";

export interface Pagination {
  page: number;
}
export interface ApplicationState {
  userSearch: UserSearchState;
  user: UserState;
}
