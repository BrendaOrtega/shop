import firebase from '../../firebase';


//LogIn Functions
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';

export function logInSuccess(user){
    return{
        type: LOG_IN_SUCCESS, user
    }
}

export const logIn = (email, password) => (dispatch, getState) =>{
    return firebase.auth().signInWithEmailAndPassword(email, password)
        .then(u=>{
            localStorage.setItem('shopy-user', JSON.stringify(u));
            dispatch(logInSuccess(u));
            return Promise.resolve(u)
        }).catch(error=>{
            const errorCode = error.code;
            let errorMessage = '';
            if (errorCode === 'auth/user-not-found') {
                let errorMessage = 'Usuario no encontrado';
            } else if (errorCode === 'auth/wrong-password') {
               let errorMessage = 'La contraseña es inválida';
            }
            return Promise.reject(error)
        })
};


//LogOut Functions
export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';

export function logOutSuccess(){
    return{
        type: LOG_OUT_SUCCESS,
    }
}
export const logOut = () => (dispatch, getState) =>{
    return firebase.auth().signOut()
        .then(()=>{
            dispatch(logOutSuccess());
            localStorage.removeItem("shopy-user");
            return Promise.resolve()
        }).catch(e=>{
        return Promise.reject(e)
    })
};

//Check if User
export const CHECK_IF_USER_SUCCESS = 'CHECK_IF_USER_SUCCESS';

export function checkIfUserSuccess(user){
    return {
        type:CHECK_IF_USER_SUCCESS, user
    }
}
export const checkIfUser = () => (dispatch, getState) =>{
    return firebase.auth().onAuthStateChanged(user=>{
        if(user){
            dispatch(checkIfUserSuccess(user))
        }else{

        }
    })
};

