import React from 'react';
import {TextField, Avatar} from 'material-ui';
import './products.css';

let elInput;

function onClick() {
    elInput.click();
}


const ProductForm = ({handleText, newProduct, uploadPhoto, imagePreview}) => {
    return (
        <div>
            <TextField
                fullWidth={true}
                onChange={handleText}
                floatingLabelText="Product Name"
                floatingLabelFixed={true}
                name="name"
                value={newProduct.name}/>
            <br/>
            <TextField
                fullWidth={true}
                onChange={handleText}
                floatingLabelText="Presentation"
                floatingLabelFixed={true}
                name="presentation"
                value={newProduct.presentation}/>
            <br/>
            <TextField
                type='number'
                fullWidth={true}
                onChange={handleText}
                floatingLabelText="Price"
                floatingLabelFixed={true}
                name="price"
                value={newProduct.price}/>
            <input ref={input => elInput = input } type="file" hidden onChange={uploadPhoto}/>
            <div className="form-photo">
                <Avatar
                    src={newProduct.image?newProduct.image:imagePreview.src}
                    size={150}
                    onClick={onClick}/>
            </div>
        </div>
    )
};

export default ProductForm;