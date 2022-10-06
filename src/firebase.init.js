// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC15U7EbeUce7LJj6zaB3MSk6qFZZ02uN0",
  authDomain: "my-luxury-motel.firebaseapp.com",
  projectId: "my-luxury-motel",
  storageBucket: "my-luxury-motel.appspot.com",
  messagingSenderId: "527135648693",
  appId: "1:527135648693:web:18221e98d20ae7ddfd87fc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
export default auth;