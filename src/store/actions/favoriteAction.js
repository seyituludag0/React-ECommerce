const ADD_TO_FAVORITE = "ADD_TO_FAVORITE";
const REMOVE_TO_FAVORITE = "REMOVE_TO_FAVORITE";

const addToFavorite = (product) => {
    return{
        type:ADD_TO_FAVORITE,
        payload:product
    }
}

const removeToFavorite = (product) => {
    return{
        type:REMOVE_TO_FAVORITE,
        payload:product
    }
}