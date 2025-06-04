
function loginAdmin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === "adminzennx" && password === "admin123") {
        alert("Login berhasil!");
        // Bisa redirect ke halaman dashboard admin di sini jika ada
    } else {
        alert("Username atau password salah!");
    }
}
