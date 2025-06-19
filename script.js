// Register Form Handler
document.getElementById("registerForm")?.addEventListener("submit", function (e) {
  e.preventDefault();

  const userData = {
    name: document.getElementById("regName").value,
    email: document.getElementById("regEmail").value,
    password: document.getElementById("regPassword").value,
    repeatPassword: document.getElementById("regPasswordRepeat").value,
  };

  if (userData.password !== userData.repeatPassword) {
    alert("Passwords do not match!");
    return;
  }

  console.log("Registered User:", userData);
  alert("Registration successful (Check Console)");
});

// Login Form Handler
document.getElementById("loginForm")?.addEventListener("submit", function (e) {
  e.preventDefault();

  const loginData = {
    name: document.getElementById("loginName").value,
    password: document.getElementById("loginPassword").value,
  };

  console.log("Login Attempt:", loginData);
  alert("Login attempt (Check Console)");
});