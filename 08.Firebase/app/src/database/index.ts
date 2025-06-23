
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { initializeAuth, getReactNativePersistence, getAuth, Auth } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyCRHbx-gPgt0QPF5l2Dck-eweBgJ2R445Q",
  authDomain: "reactnativecurso-1.firebaseapp.com",
  projectId: "reactnativecurso-1",
  storageBucket: "reactnativecurso-1.firebasestorage.app",
  messagingSenderId: "668491695709",
  appId: "1:668491695709:web:6d465dc625d3a9a021efb4"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

let auth: Auth;
try {
  auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage)
  });
} catch (error) {
  console.error("Erro ao inicializar o auth:", error);
  auth = getAuth(app);
}

export { db, auth };