import React from 'react';
import {OrdersList} from "./OrdersList";

export const OrdersComponent = ({orders}) => {
    return (
        <div>
            <OrdersList orders={orders}/>
        </div>
    );
};
