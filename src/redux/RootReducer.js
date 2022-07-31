import { useReducer } from "react";
import { combineReducers } from "redux";
import cakeReducer from "./cake/cakeReducer";
import { icecreamReducer } from "./icecream/IcecreamReducre";

const rootReducer = combineReducers({
  cake: cakeReducer,
  icecream: icecreamReducer,
  user: useReducer,
});
export default rootReducer;
