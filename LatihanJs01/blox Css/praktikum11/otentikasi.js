const validUsername = "PrasMul";
const validPassword = "Mulya@3406";

const loginButton = document.getElementById("loginButton");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const errorMessage = document.getElementById("errorMessage");

loginButton.addEventListener("click", function () {
  const username = usernameInput.value;
  const password = passwordInput.value;

  errorMessage.style.display = "none";

  if (username === validUsername && password === validPassword) {
    alert("Login sukses!");
    document.body.innerHTML = `
      <div class="login-container">
        <h1>Login Sukses</h1>
        <p>Selamat datang, ${username}!</p>
      </div>
    `;
  } else {
    errorMessage.style.display = "block";
  }
});