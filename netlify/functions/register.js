import { getAuth, createUserWithEmailAndPassword, updateProfile } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
import { app } from "../../firebaseConfig.js"; 
const auth = getAuth(app);

document.getElementById("register-form").addEventListener("submit", (e) => {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Registration successful
      const user = userCredential.user;
      // update the user's display name with the username
      return updateProfile(user, { displayName: username });
    })
    .then(() => {
      alert("Registration Successful");
      // redirect to login page 
      window.location.href = "login.html";
    })
    .catch((error) => {
      alert("Registration error: " + error.message);
    });
});
