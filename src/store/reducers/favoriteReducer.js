import { ADD_TO_FAVORITE, REMOVE_TO_FAVORITE } from "../actions/favoriteAction";
import { favorites } from "../initialValues/favorite";

const initialState = { favoriteItems: favorites };

export default function FavoriteReducer(state = initialState, { type, payload }){



}
