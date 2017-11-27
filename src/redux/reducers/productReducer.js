import {DELETE_PRODUCT_SUCCES, GET_PRODUCTS_SUCCESS, SAVE_PRODUCT_SUCCESS} from "../actions/productActions";

export function productReducer(state=[], action){
    switch(action.type){
        case GET_PRODUCTS_SUCCESS:

            return [...state, action.products];
        case DELETE_PRODUCT_SUCCES:
            let product = action.product;
            return state.filter(p=>(p.id!==product.id));
        case SAVE_PRODUCT_SUCCESS:
            let list = state.filter(p=>(p.id!==action.product.id));
            let newP = action.product;
            return [...list, newP];
        default:
            return state;
    }
}