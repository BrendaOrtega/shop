import React from 'react';
import {TextField, Avatar, Toggle, SelectField, MenuItem} from 'material-ui';
import './products.css';

let elInput;

function onClick() {
    elInput.click();
}


const ProductForm = ({handleText, newProduct, uploadPhoto, imagePreview, onSubmit, handleChange, handleToggle}) => {
    return (

        <form>
            <SelectField
                required
                floatingLabelFixed={true}
                fullWidth={true}
                name="category"
                floatingLabelText="Categoría"
                value={newProduct.category}
                onChange={handleChange}
            >
                <MenuItem value={'lacteos'} primaryText="Lacteos" />
                <MenuItem value={'frutas-y-verduras'} primaryText="Frutas y Verduras" />
                <MenuItem value={'carnes-y-pescados'} primaryText="Carnes y Pescados" />
                <MenuItem value={'panaderia'} primaryText="Panadería" />
                <MenuItem value={'jugos'} primaryText="Jugos" />
                <MenuItem value={'vinos-y.licores'} primaryText="Vinos y Licores" />
                <MenuItem value={'higiene'} primaryText="Higiene" />
                <MenuItem value={'farmacia'} primaryText="Farmacia" />
                <MenuItem value={'bebes'} primaryText="Bebes" />
                <MenuItem value={'congelados'} primaryText="Congelados" />
            </SelectField>
            <br/>
            <TextField
                required
                fullWidth={true}
                onChange={handleText}
                floatingLabelText="Nombre del Producto"
                floatingLabelFixed={true}
                name="name"
                value={newProduct.name}/>
            <br/>
            <TextField
                required
                fullWidth={true}
                onChange={handleText}
                floatingLabelText="Presentación"
                floatingLabelFixed={true}
                name="presentation"
                value={newProduct.presentation}/>
            <br/>
            <TextField
                required
                type='number'
                fullWidth={true}
                onChange={handleText}
                floatingLabelText="Precio"
                floatingLabelFixed={true}
                name="price"
                value={newProduct.price}/>
            <br/><br/>
            <Toggle
                onToggle={handleToggle}
                label="Producto en oferta"
                defaultToggled={newProduct.in_offer}

            />
            <br/>
            <TextField
                required
                type='number'
                fullWidth={true}
                onChange={handleText}
                floatingLabelText="Precio de Oferta"
                floatingLabelFixed={true}
                name="offer_price"
                value={newProduct.offer_price}/>

            <input ref={input => elInput = input } type="file" hidden onChange={uploadPhoto} required name="image"/>
            <div className="form-photo">
                <Avatar
                    src={newProduct.image?newProduct.image:imagePreview.src}
                    size={150}
                    onClick={onClick}/>
            </div>
        </form>
    )
};

export default ProductForm;