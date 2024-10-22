
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyDb8s3us05qQLxFyUd5DrvBsMnMV2iN6n8",
  authDomain: "fullstackecommerce-55926.firebaseapp.com",
  projectId: "fullstackecommerce-55926",
  storageBucket: "fullstackecommerce-55926.appspot.com",
  messagingSenderId: "75802097591",
  appId: "1:75802097591:web:2d57822847480161fd9a32",
  measurementId: "G-3Y2C9SV6CS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {auth , db};
