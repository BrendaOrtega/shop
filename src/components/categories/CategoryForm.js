import React from 'react';
import '../products/products.css';
import {TextField, Avatar, Toggle, SelectField, MenuItem} from 'material-ui';

let elInput;

function onClick() {
    elInput.click();
}



const CategoryForm = ({newCat, imagePreview, uploadPhoto, handleText}) => {
    return (
        <form>
            {/*<form onSubmit={onSubmit} id="newProduct">*/}

            <TextField
                required
                fullWidth={true}
                onChange={handleText}
                floatingLabelText="Categoría"
                floatingLabelFixed={true}
                name="name"
                value={newCat.name}/>
            <br/>
            <TextField
                required
                fullWidth={true}
                onChange={handleText}
                floatingLabelText="Slug"
                floatingLabelFixed={true}
                name="slug"
                value={newCat.slug}/>
            <br/>

            <input ref={input => elInput = input } type="file" hidden onChange={uploadPhoto} required name="image"/>
            <div className="form-photo">
                <Avatar
                    src={!imagePreview.src?newCat.image:imagePreview.src}
                    size={150}
                    onClick={onClick}/>
            </div>
        </form>
    )
};

export default CategoryForm;