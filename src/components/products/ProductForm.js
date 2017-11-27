import React from 'react';
import {TextField} from 'material-ui';

const ProductForm = ({handleText}) => {
    return (
        <div>
            <TextField
                fullWidth={true}
                onChange={handleText}
                floatingLabelText="Product Name"
                floatingLabelFixed={true}
                name="name"/>
            <br/>
            <TextField
                fullWidth={true}
                onChange={handleText}
                floatingLabelText="Presentation"
                floatingLabelFixed={true}
                name="presentation"/>
            <br/>
            <TextField
                fullWidth={true}
                onChange={handleText}
                floatingLabelText="Price"
                floatingLabelFixed={true}
                name="price"/>
        </div>
    )
};

export default ProductForm;