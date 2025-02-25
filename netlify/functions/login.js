import { app } from "../../firebaseConfig.js";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth(app);

document.getElementById("login-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Successful login
      alert("Login Successful");
      // Redirect to homepage 
      window.location.href = "index.html";
    })
    .catch((error) => {
      alert("Login error: " + error.message);
    });
});
