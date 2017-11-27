import React from 'react';
import OrderProductsList from "./OrderProductsList";

export const OrdersDetailComponent = ({order}) => {
    return (
        <div>
            <OrderProductsList order={order}/>
        </div>
    );
};