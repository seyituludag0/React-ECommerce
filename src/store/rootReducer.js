import { combineReducers } from "redux";
import cartReducer from "./reducers/cartReducer";
import compareReducer from "./reducers/compareReducer";
import authReducer from "./reducers/authReducer";

const rootReducer = combineReducers({
  cart: cartReducer,
  compareList: compareReducer,
  auth: authReducer
});

export default rootReducer;
