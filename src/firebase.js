import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyASbmuC-mbEUN395EFGBOYez6jY5lwzfLQ",
  authDomain: "fir-authentication-b0098.firebaseapp.com",
  projectId: "fir-authentication-b0098",
  storageBucket: "fir-authentication-b0098.appspot.com",
  messagingSenderId: "734967910447",
  appId: "1:734967910447:web:73a94121ee41bfcdde76da",
  measurementId: "G-YL682M8NGT",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
