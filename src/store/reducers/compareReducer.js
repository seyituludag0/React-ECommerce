import {
  ADD_TO_COMPARISON_LIST,
  REMOVE_TO_COMPARISON_LIST,
} from "../actions/compareAction";
import { compareList } from "../initialValues/compare";

const initialState = []

export default function compareReducer( state = initialState, action) {
  switch (action.type) {
    case ADD_TO_COMPARISON_LIST:
      if (state.includes(action.payload)) {
        return state;
      }
      return [...state, action.payload];
    
   case REMOVE_TO_COMPARISON_LIST:
       const item = action.payload;
       return state.filter((product)=>product !== item);   
    default:
        return state;
  }
}
