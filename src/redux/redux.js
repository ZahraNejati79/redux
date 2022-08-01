import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import rootReducer from "../redux/RootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger, thunk))
);
export default store;
