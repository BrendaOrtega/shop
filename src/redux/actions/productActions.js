import firebase from '../../firebase';

const db = firebase.database().ref();

//***** add or update products *****//
export const SAVE_PRODUCT_SUCCESS = 'SAVE_PRODUCT_SUCCESS';

export function saveProductSuccess(product){
    return{
        type:SAVE_PRODUCT_SUCCESS, product
    }
}

export const saveProduct = (product, imagePreview) => (dispatch, getState) => {
    let updates = {};
    let key;
    if (product.id) key = product.id;
    else key = db.push().key;
    product['id'] = key;
    if(imagePreview.file){
        return firebase.storage().ref('products/'+key).put(imagePreview.file)
            .then(r=>{
                product['image']=r.downloadURL;
                updates[`dev/products/${key}`] = product;
                return db.update(updates)
                    .then(r=>{
                        return Promise.resolve(r);
                    }).catch(e=>{
                        return Promise.reject(e);
                    })
            }).catch(e=>{

            })
    }else{
        updates[`dev/products/${key}`] = product;
        return db.update(updates)
            .then(r=>{
                return Promise.resolve(r);
            }).catch(e=>{
                return Promise.reject(e);
            })
    }

};
//onchild changed
export const updateProduct=()=>(dispatch, getState)=>{
    return db.child('/dev/products').on('child_changed', snap=>{
        dispatch(saveProductSuccess(snap.val()))
    })
};

//***** delete products *****//

export const DELETE_PRODUCT_SUCCES = 'DELETE_PRODUCT_SUCCES';

export function deleteProductSuccess(product) {
    return{
        type:DELETE_PRODUCT_SUCCES, product
    }
}

export const deleteProduct=(product)=>(dispatch, getState)=>{
    let updates = {};

    updates[`dev/products/${product.id}`] = null;
    return firebase.storage().ref('products/'+product.id).delete()
        .then(r=>{
            return db.update(updates)
                .then(r=>{
                    return Promise.resolve(r)
                }).catch(e=>{
                    return Promise.reject(e)
                })
        }).catch(e=>{

        })

};
//onchild removed
export const removeProduct=()=>(dispatch, getState)=>{
    return db.child('/dev/products').on('child_removed', snap=>{
        dispatch(deleteProductSuccess(snap.val()))
    })
};

//***** get products *****//

export const GET_PRODUCTS_SUCCESS = 'GET_PRODUCTS_SUCCESS';

export function getProductsSuccess(products){
    return{
        type:GET_PRODUCTS_SUCCESS, products
    }
}
//Listeners
export const getProducts=()=>(dispatch, getState)=>{
    return db.child('dev/products').on('child_added', snap=>{
        dispatch(getProductsSuccess(snap.val()))
    })
};



