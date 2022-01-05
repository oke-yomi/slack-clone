import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyBWmCWvCvs8bRdBPpfIyPVAsaQSIW13viU",
	authDomain: "slack-clone-b56d4.firebaseapp.com",
	projectId: "slack-clone-b56d4",
	storageBucket: "slack-clone-b56d4.appspot.com",
	messagingSenderId: "930233077712",
	appId: "1:930233077712:web:9ea58c06fee67f192e73d5",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
