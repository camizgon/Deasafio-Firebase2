// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Tu configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDG_ChChpLXQolTlBLj-BvEv1uktzhfZVk",
  authDomain: "fir-2-24d2c.firebaseapp.com",
  projectId: "fir-2-24d2c",
  storageBucket: "fir-2-24d2c.appspot.com",
  messagingSenderId: "550569607359",
  appId: "1:550569607359:web:856d9fc71d9f67c56c860a"
};

console.log('Configuración de Firebase:', firebaseConfig);

const app = initializeApp(firebaseConfig);
console.log('Aplicación Firebase inicializada:', app);

const auth = getAuth(app);
console.log('Autenticación Firebase inicializada:', auth);

export { auth };
