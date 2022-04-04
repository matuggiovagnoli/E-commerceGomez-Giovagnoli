
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDGAST8av-X6T5gKL4xmY8UV5ZNK-UMppA",
  authDomain: "faustina-e-commerce.firebaseapp.com",
  projectId: "faustina-e-commerce",
  storageBucket: "faustina-e-commerce.appspot.com",
  messagingSenderId: "140788483741",
  appId: "1:140788483741:web:b14383ef73cca7129bb674"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore (app);

export default db;