import firebase from '../../firebase';

const db = firebase.database().ref();

export const SAVE_CATEGORY_SUCCESS = 'SAVE_CATEGORY_SUCCESS';

export function saveCategorySuccess(category){
    return {
        type:SAVE_CATEGORY_SUCCESS, category
    }
}

export const saveCategory = (category) => (dispatch, getState) => {
    let updates = {};
    let key;
    if (category.id) key = category.id;
    else key = db.push().key;
    category['id'] = key;

        updates[`dev/categories/${key}`] = category;
        return db.update(updates)
            .then(r=>{
                return Promise.resolve(r);
            }).catch(e=>{
                return Promise.reject(e);
            })
};

//onchild changed
export const updateProduct=()=>(dispatch, getState)=>{
    return db.child('/dev/categories').on('child_changed', snap=>{
        dispatch(saveCategorySuccess(snap.val()))
    })
};

//***** delete cat *****//

export const DELETE_CATEGORY_SUCCES = 'DELETE_CATEGORY_SUCCES';

export function deleteCategorySuccess(category) {
    return{
        type:DELETE_CATEGORY_SUCCES, category
    }
}

export const deleteCategory=(category)=>(dispatch, getState)=>{
    let updates = {};

    updates[`dev/categories/${category.id}`] = null;

            return db.update(updates)
                .then(r=>{
                    return Promise.resolve(r)
                }).catch(e=>{
                    return Promise.reject(e)
                })

};
//onchild removed
export const removeCategory=()=>(dispatch, getState)=>{
    return db.child('/dev/categories').on('child_removed', snap=>{
        dispatch(deleteCategorySuccess(snap.val()))
    })
};

//***** get cats *****//

export const GET_CATEGORIES_SUCCESS = 'GET_CATEGORIES_SUCCESS';

export function getCategoriesSuccess(categories){
    return{
        type:GET_CATEGORIES_SUCCESS, categories
    }
}
//Listeners
export const getCategories=()=>(dispatch, getState)=>{
    return db.child('dev/categories').on('child_added', snap=>{
        dispatch(getCategoriesSuccess(snap.val()))
    })
};

