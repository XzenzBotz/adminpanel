
document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("loginForm");

  if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;

      if (username === "adminzennx" && password === "zennx123") {
        alert("Login berhasil!");
        window.location.href = "dashboard.html"; // ubah sesuai kebutuhan
      } else {
        alert("Username atau password salah.");
      }
    });
  }
});
