import firebase from '../../firebase';
const db = firebase.database().ref();

//get Orders

export const GET_ORDERS_SUCCESS = 'GET_ORDERS_SUCCESS';

export function getOrdersSuccess(orders){
    return{
        type:GET_ORDERS_SUCCESS, orders
    }
}

export const getOrders=()=>(dispatch, getState)=>{
  return db.child('/dev/orders').on('child_added', snap=>{
      dispatch(getOrdersSuccess(snap.val()))
  })
};

//save Orders

export const SAVE_ORDER_SUCCESS =  'SAVE_ORDER_SUCCESS';

export function saveOrderSuccess(order){
    return{
        type:SAVE_ORDER_SUCCESS, order
    }
}

export const saveOrder=(order)=>(dispatch, getState)=>{
    let updates={};
    let key;
    if(order.id) key=order.id;
    else key=db.push().hey;
    order['id']=key;
    updates[`/dev/orders/${key}`]=order;
    return db.update(updates)
        .then(r=>{
            return Promise.resolve(r);
        }).catch(e=>{
            return Promise.reject(e);
        })

};
//onchild changed
export const updateOrder=()=>(dispatch, getState)=>{
    return db.child('/dev/orders').on('child_changed', snap=>{
        dispatch(getOrdersSuccess(snap.val()))
    })
};
//onchild removed
export const removeOrder=()=>(dispatch, getState)=>{
    return db.child('/dev/orders').on('child_removed', snap=>{
        dispatch(getOrdersSuccess(snap.val()))
    })
};

//delete Orders

export const DELETE_ORDER_SUCCESS = 'DELETE_ORDER_SUCCESS';

export function deleteOrderSuccess(order) {
    return{
        type:DELETE_ORDER_SUCCESS, order
    }
}

export const deleteOrder=(order)=>(dispatch, getState)=>{
    let updates={};
    updates[`/dev/orders/${order.id}`] = null;
    return db.update(updates)
        .then(r=>{
            return Promise.resolve(r);
        }).catch(e=>{
            return Promise.reject(e);
        })
};