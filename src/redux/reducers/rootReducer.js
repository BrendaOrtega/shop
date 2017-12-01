import {combineReducers} from 'redux';
import {userReducer} from "./userReducer";
import {productReducer} from "./productReducer";
import {ordersReducer} from "./ordersReducer";
import {categoriesReducer} from "./categoriesReducer";


const rootReducer = combineReducers({
    user:userReducer,
    products:productReducer,
    orders: ordersReducer,
    categories:categoriesReducer
});

export default rootReducer;