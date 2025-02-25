import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjjymOnaCsD9Le9fZns-wkOaql4Ot6HKE",
  authDomain: "networking-project-59558.firebaseapp.com",
  projectId: "networking-project-59558",
  storageBucket: "networking-project-59558.firebasestorage.app",
  messagingSenderId: "884631508098",
  appId: "1:884631508098:web:b3661e0b3e5c425332d09b",
  measurementId: "G-XQ8KZYEPBB"
};

// initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
