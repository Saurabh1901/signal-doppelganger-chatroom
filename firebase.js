import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
apiKey: "AIzaSyCpZdhtNyzvGMK_AH7qw9_fNaPZtMaeEFw",
authDomain: "signal-doppelganger.firebaseapp.com",
projectId: "signal-doppelganger",
storageBucket: "signal-doppelganger.appspot.com",
messagingSenderId: "663691659629",
appId: "1:663691659629:web:f0db0a542568b491cf7264"
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };



