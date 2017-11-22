import * as firebase from 'firebase';
// Initialize Firebase
const config = {
    apiKey: "AIzaSyBrx420xJAuQM1KPmYJnAxrMIaDfcQa1vI",
    authDomain: "eatfast-f5acf.firebaseapp.com",
    databaseURL: "https://eatfast-f5acf.firebaseio.com",
    projectId: "eatfast-f5acf",
    storageBucket: "eatfast-f5acf.appspot.com",
    messagingSenderId: "354773888658"
};
firebase.initializeApp(config);
export default firebase;
