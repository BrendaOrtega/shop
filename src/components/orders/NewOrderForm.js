import React from 'react';
import {DropDownMenu, MenuItem} from 'material-ui';

const NewOrderForm = ({products, onChange, value}) => {
    return (
        <form>
            <DropDownMenu value={value} onChange={onChange}>
                {products.map( (product, key) => {
                    return <MenuItem value={product.id} primaryText={product.name} />
                })}
            </DropDownMenu>
        </form>
    );
};

export default NewOrderForm;