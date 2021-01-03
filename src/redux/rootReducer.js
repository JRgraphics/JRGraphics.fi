import { combineReducers } from "redux";
import styleReducer from "./reducers/style";

const rootReducer = combineReducers({
  style: styleReducer,
});

export default rootReducer;
