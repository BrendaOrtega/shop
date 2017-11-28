import {DELETE_ORDER_SUCCESS, GET_ORDERS_SUCCESS} from "../actions/orderActions";

export function ordersReducer(state=[], action){
    switch(action.type){
        case GET_ORDERS_SUCCESS:

            return [...state, action.order];
        case DELETE_ORDER_SUCCESS:
            let product = action.order;
            return state.filter(p=>(p.id!==product.id));
        // case SAVE_PRODUCT_SUCCESS:
        //     let list = state.filter(p=>(p.id!==action.product.id));
        //     let newP = action.product;
        //     return [...list, newP];
        default:
            return state;
    }
}