// import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js'
// import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-auth.js";

// const firebaseConfig = {
//     apiKey: "AIzaSyAT-vTMk46KZJUXvaVciDbxbO44V8fvRsM",
//     authDomain: "smit-firebase-project-01.firebaseapp.com",
//     projectId: "smit-firebase-project-01",
//     storageBucket: "smit-firebase-project-01.appspot.com",
//     messagingSenderId: "1018741950394",
//     appId: "1:1018741950394:web:c4f0e2ade7c201d7d3ff83"
//   };
  
//   const app = initializeApp(firebaseConfig);
//   const auth = getAuth(app);

//   export {
//     auth,
//     createUserWithEmailAndPassword
//   }
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js'
import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged,sendEmailVerification,signOut     } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js'
const firebaseConfig = {
    apiKey: "AIzaSyB1da3oF2RQIsBzuYysNNXyxpOLC4d2RgY",
    authDomain: "practice-85a83.firebaseapp.com",
    projectId: "practice-85a83",
    storageBucket: "practice-85a83.appspot.com",
    messagingSenderId: "334282315824",
    appId: "1:334282315824:web:c427330d8cf35045f0f5f5"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const auth = getAuth(app);
  export {
    auth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    sendEmailVerification,
    signOut   
}

