// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwLrhoTzKjZir8UhJktG-E9zSFQFobPD4",
  authDomain: "wedding-photo-9d7dc.firebaseapp.com",
  projectId: "wedding-photo-9d7dc",
  storageBucket: "wedding-photo-9d7dc.appspot.com",
  messagingSenderId: "319345475865",
  appId: "1:319345475865:web:a71d63c845cd18b1e08588"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

//export default storage;
export default storage;
export {auth,provider};
