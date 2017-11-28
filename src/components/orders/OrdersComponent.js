import React from 'react';
import {OrdersList} from "./OrdersList";
import {TextField} from 'material-ui';

export const OrdersComponent = ({orders, history,  search, handleSearch}) => {
    return (
        <div>
            <div className="search">
                <TextField
                    value={search}
                    style={{width:'50%'}}
                    className="search-text"
                    hintText="Busca..."
                    name="search"
                    onChange={handleSearch}/>
            </div>
            <OrdersList
                orders={orders}
                history={history}
            />
        </div>
    );
};
