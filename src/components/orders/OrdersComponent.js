import React from 'react';
import {OrdersList} from "./OrdersList";

export const OrdersComponent = ({orders, history}) => {
    return (
        <div>
            <OrdersList orders={orders} history={history}/>
        </div>
    );
};
