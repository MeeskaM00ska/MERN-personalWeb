// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-personalweb.firebaseapp.com",
  projectId: "mern-personalweb",
  storageBucket: "mern-personalweb.appspot.com",
  messagingSenderId: "581064398025",
  appId: "1:581064398025:web:bb81f3f3fa2ee94c21a918",
  measurementId: "G-JYPECG0J9D",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
