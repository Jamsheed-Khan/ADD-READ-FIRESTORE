
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-firestore.js";


const firebaseConfig = {
    apiKey: "AIzaSyBORTynaOSX4H7ExY1t5i_--dqFYPpT0Io",
    authDomain: "todos-list-f79e8.firebaseapp.com",
    projectId: "todos-list-f79e8",
    storageBucket: "todos-list-f79e8.appspot.com",
    messagingSenderId: "284240193409",
    appId: "1:284240193409:web:2ec3879ad485f517bbaa80",
    measurementId: "G-66F8PEVSL9"
  };



  export const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app);

