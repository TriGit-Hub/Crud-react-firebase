
import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyDgC9iWY2kwlT6daEM9Q8aFcyodgFaUQBM",
    authDomain: "crud-react-b3cb6.firebaseapp.com",
    databaseURL: "https://crud-react-b3cb6-default-rtdb.firebaseio.com",
    projectId: "crud-react-b3cb6",
    storageBucket: "crud-react-b3cb6.appspot.com",
    messagingSenderId: "152741307595",
    appId: "1:152741307595:web:b951343ceeb3f171cf674e"
};
// Initialize Firebase
var fireDB=firebase.initializeApp(firebaseConfig);

export default fireDB.database().ref();
