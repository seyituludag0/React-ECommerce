import { combineReducers } from "redux";
import cartReducer from "./reducers/cartReducer";
import compareReducer from "./reducers/compareReducer";

const rootReducer = combineReducers({
  // cart: cartReducer,
  compareList: compareReducer,
});

export default rootReducer;
