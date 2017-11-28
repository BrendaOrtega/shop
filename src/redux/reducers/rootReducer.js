import {combineReducers} from 'redux';
import {userReducer} from "./userReducer";
import {productReducer} from "./productReducer";
import {ordersReducer} from "./ordersReducer";


const rootReducer = combineReducers({
    user:userReducer,
    products:productReducer,
    orders: ordersReducer
});

export default rootReducer;