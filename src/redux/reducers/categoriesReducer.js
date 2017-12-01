import {DELETE_CATEGORY_SUCCES, GET_CATEGORIES_SUCCESS, SAVE_CATEGORY_SUCCESS} from "../actions/categoryActions";

export function categoriesReducer(state=[], action){
    switch(action.type){
        case GET_CATEGORIES_SUCCESS:

            return [...state, action.products];
        case DELETE_CATEGORY_SUCCES:
            let product = action.product;
            return state.filter(p=>(p.id!==product.id));
        case SAVE_CATEGORY_SUCCESS:
            let list = state.filter(p=>(p.id!==action.product.id));
            let newP = action.product;
            return [...list, newP];
        default:
            return state;
    }
}