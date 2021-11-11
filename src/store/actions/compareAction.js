export const ADD_TO_COMPARISON_LIST = "ADD_TO_COMPARISON_LIST";
export const REMOVE_TO_COMPARISON_LIST = "REMOVE_TO_COMPARISON_LIST";

export function addToComparison (product) {
    return{
        type: ADD_TO_COMPARISON_LIST,
        payload: product
    }
}

export function removeToComparison (product) {
    return{
        type: REMOVE_TO_COMPARISON_LIST,
        payload: product
    }
}