import firebaseApp from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
  apiKey: "AIzaSyCheO61vK4Qf0lRmrAcc9db5HxclbnvbPc",
  authDomain: "crypto-6b45c.firebaseapp.com",
  projectId: "crypto-6b45c",
  storageBucket: "crypto-6b45c.appspot.com",
  messagingSenderId: "143324850251",
  appId: "1:143324850251:web:d6b014a7266567903305ce"
  };

// Initialize Firebase
firebaseApp.initializeApp(config);



export default firebaseApp