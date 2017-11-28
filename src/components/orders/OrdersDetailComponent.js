import React from 'react';
import OrderProductsList from "./OrderProductsList";

export const OrdersDetailComponent = ({order, products}) => {
    return (
        <div>
            <OrderProductsList order={order} products={products}/>
        </div>
    );
};