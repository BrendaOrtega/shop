import {DELETE_ORDER_SUCCESS, GET_ORDERS_SUCCESS, UPDATE_ORDER_SUCCESS} from "../actions/orderActions";

export function ordersReducer(state=[], action){
    let {order} = action;
    switch(action.type){
        case GET_ORDERS_SUCCESS:
            return [ action.order, ...state];
        case DELETE_ORDER_SUCCESS:
            return [... state.filter(o=>(o.id!==order.id))];
        case UPDATE_ORDER_SUCCESS:
            console.log(state);
            console.log(order);
            return [ ...state.map( o => {
                if( o.id === order.id){
                    return order;
                }
                return o;
            })];

        // case SAVE_PRODUCT_SUCCESS:
        //     let list = state.filter(p=>(p.id!==action.product.id));
        //     let newP = action.product;
        //     return [...list, newP];
        default:
            return state;
    }
}