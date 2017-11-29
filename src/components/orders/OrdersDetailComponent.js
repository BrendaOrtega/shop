import React from 'react';
import OrderProductsList from "./OrderProductsList";


export const OrdersDetailComponent = ({order, products, print, updateCheck}) => {
    return (
        <div>
            <OrderProductsList order={order} products={products} print={print} updateCheck={updateCheck}/>
        </div>
    );
};