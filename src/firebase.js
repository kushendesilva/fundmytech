import * as firebase from "firebase";
import "@firebase/auth";
import "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyANw395hUK2SxqKkdZVq78WjOXv1ZFnjs8",
  authDomain: "fundmytech-e114804.firebaseapp.com",
  databaseURL: "https://fundmytech-e114804.firebaseio.com",
  projectId: "fundmytech-e114804",
  storageBucket: "fundmytech-e114804.appspot.com",
  messagingSenderId: "328533889136",
  appId: "1:328533889136:android:b39098e55d2d38994be4b5",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
