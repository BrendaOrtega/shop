import React from 'react';
import OrderProductsList from "./OrderProductsList";


export const OrdersDetailComponent = ({order, products, print}) => {
    return (
        <div>
            <OrderProductsList order={order} products={products} print={print}/>
        </div>
    );
};