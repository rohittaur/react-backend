// ======================  NEW CODE  ======================= //

// import { initializeApp } from 'firebase/app';
// import { getFirestore} from 'firebase/firestore/lite';
// import { getDatabase, ref, set } from "firebase/database";

// const firebaseConfig = {
//   apiKey: "AIzaSyAlwm8ZRdVA9vdD7Lby14MOelkp-WNb4Io",
//   authDomain: "blogs-ac3ea.firebaseapp.com",
//   projectId: "blogs-ac3ea",
//   storageBucket: "blogs-ac3ea.appspot.com",
//   messagingSenderId: "95197388582",
//   appId: "1:95197388582:web:33ffe7e03cea6bec70abe7",
//   measurementId: "G-70FV45103Z"
// };

// const app = initializeApp(firebaseConfig);

// export const store = getFirestore(app);
// export const db = getDatabase(app);


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore} from 'firebase/firestore';
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDyASb06CgrjzRtNsKMCyh2PK5qpOv2VOY",
  authDomain: "blogapp-8032f.firebaseapp.com",
  databaseURL: "https://blogapp-8032f-default-rtdb.firebaseio.com",
  projectId: "blogapp-8032f",
  storageBucket: "blogapp-8032f.appspot.com",
  messagingSenderId: "194032164620",
  appId: "1:194032164620:web:ae63a5cafe9f487f58b329",
  measurementId: "G-GLYLJ1J7C0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const store = getFirestore(app);


// Get a reference to the storage service, which is used to create references in your storage bucket
export const storage = getStorage(app);




