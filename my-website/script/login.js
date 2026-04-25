import { users} from "/Interfaces/UserLogin.js";
document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Formun normal gönderimini engeller

  const registeredEmail = document.getElementById("email").value;
  const  registeredPassword = document.getElementById("password").value;

 const found = users.find(
    u => u.email === registeredEmail && u.password === registeredPassword
  );
  if (found) {
    // Doğruysa yönlendirme
  window.location.href = "/home.html";
  } else {
    alert("E-posta veya şifre hatalı!");
  }
});
