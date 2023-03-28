// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
// Chaves de acesso ao firebase
const firebaseConfig = {
  apiKey: "AIzaSyCYVZm5Vv2UyFgZfgTO7zGd5fLAgF0Aup0",
  authDomain: "bibliotech-project.firebaseapp.com",
  projectId: "bibliotech-project",
  storageBucket: "bibliotech-project.appspot.com",
  messagingSenderId: "636852906989",
  appId: "1:636852906989:web:dadf1cf2b959753c0795e4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig); // inicializa o app com base nas configs acima
export const auth = getAuth(app); // Config o authentication e seus recursos de login/caastro
export const db = getFirestore(app); // config fireStore e seus recursos de banco de dados
export const storage = getStorage(app); // config o storge e seus recursos de upload