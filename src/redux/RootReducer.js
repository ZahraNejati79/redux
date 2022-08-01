import { combineReducers } from "redux";
import cakeReducer from "./cake/cakeReducer";
import { icecreamReducer } from "./icecream/IcecreamReducre";
import { userReducer } from "./user/UserReducer";

const rootReducer = combineReducers({
  cake: cakeReducer,
  icecream: icecreamReducer,
  user: userReducer,
});
export default rootReducer;
