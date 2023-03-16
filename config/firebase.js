// Configuracion y conexion a DB de Firebase
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { getAuth, onAuthStateChanged } from "firebase/auth";

// credenciales del proyecto creado en firebase
const firebaseConfig = initializeApp({
  apiKey: "AIzaSyAWbpsbtrXUMq1yboc934sej6voKZCIVgU",
  authDomain: "bd-prueba-19ce0.firebaseapp.com",
  projectId: "bd-prueba-19ce0",
  storageBucket: "bd-prueba-19ce0.appspot.com",
  messagingSenderId: "685185852330",
  appId: "1:685185852330:web:77220addda9e4263bfc1d3",
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
