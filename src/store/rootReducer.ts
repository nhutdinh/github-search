import { combineReducers } from "redux";
import userSearchReducer from "./UserSerach/UserSerach.reducer";
import userReducer from "./User/User.reducer";
const rootReducer = combineReducers({
  userSearch: userSearchReducer,
  user: userReducer,
});
export default rootReducer;
