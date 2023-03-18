// Configuracion y conexion a DB de Firebase
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { config } from "dotenv";
// import { getAuth, onAuthStateChanged } from "firebase/auth";

config();

// credenciales del proyecto creado en firebase
const firebaseConfig = initializeApp({
  apiKey: process.env.APIKEY,
  authDomain: process.env.AUTHDOMAIN,
  projectId: process.env.PROJECTID,
  storageBucket: process.env.STORAGEBUCKET,
  messagingSenderId: process.env.MESSAGINGSENDERID,
  appId: process.env.APPID,
});

// otra manera de configurar el app de la BD
// const app_db = initializeApp(firebaseConfig)
// const db = getFirestore(app_db)

export const db = getFirestore(firebaseConfig);

// funcion de autenticacion a db de firestore
// const auth = getAuth(firebaseConfig);
// Detect auth statey autenticacion de usuario
// onAuthStateChanged(auth, (user) => {
//   if (user !== null) {
//     console.log("Logged in");
//   } else {
//     console.log("No user");
//   }
// });
