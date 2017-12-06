import firebase from '../../firebase';
import Alert from 'react-s-alert';
import {notify} from '../../NotificationAPI';
const db = firebase.database().ref();

//get Orders

export const GET_ORDERS_SUCCESS = 'GET_ORDERS_SUCCESS';

export function getOrdersSuccess(order){
    return{
        type:GET_ORDERS_SUCCESS, order
    }
}

export const getOrders=()=>(dispatch, getState)=>{
  return db.child('/dev/orders').on('child_added', snap=>{
      const beep = require('../../assets/beep.mp3');
      if(!snap.val().isDelivered){
          Alert.info('Tienes una nueva orden', {
              position: 'top-right',
              effect: 'scale',
              onShow: function () {
                  console.log('I work!')
              },
              beep: beep,
              timeout: 'none',
              offset: 100
          });
          const notification = notify('Shoppy dice', '¡Tienes una nueva orden!');
      }
      // notification.onclick = function (r) {
      //     const history = window.history;
      //     console.log(history);
      //     history.pushState('/admin');
      // };
      dispatch(getOrdersSuccess(snap.val()))
  });
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

export const UPDATE_ORDER_SUCCESS =  'UPDATE_ORDER_SUCCESS';

export function updateOrderSuccess(order) {
    return {
        type: UPDATE_ORDER_SUCCESS,
        order
    }
}

export const updateOrder=()=>(dispatch, getState)=>{
    return db.child('/dev/orders').on('child_changed', snap=>{
        dispatch(updateOrderSuccess(snap.val()))
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