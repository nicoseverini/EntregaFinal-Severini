import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_qNysqrQ5MLQg3tG9WDz1MsWGwtdrKiI",
  authDomain: "reactjs-coderhouse-34783.firebaseapp.com",
  projectId: "reactjs-coderhouse-34783",
  storageBucket: "reactjs-coderhouse-34783.appspot.com",
  messagingSenderId: "628094013109",
  appId: "1:628094013109:web:fa618390579d2b53eef8fc"
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
) 