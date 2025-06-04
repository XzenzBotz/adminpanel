// Login
const loginForm = document.getElementById("login-form");
const adminPanel = document.getElementById("admin-panel");
const username = "adminzennx";
const password = "zennx123";

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputUser = document.getElementById("username").value;
  const inputPass = document.getElementById("password").value;
  
  if (inputUser === username && inputPass === password) {
    loginForm.style.display = "none";
    adminPanel.style.display = "block";
    loadProducts();
  } else {
    alert("Username atau password salah!");
  }
});

// Tambah Produk
const productForm = document.getElementById("product-form");
const productList = document.getElementById("product-list");

productForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("product-name").value;
  const desc = document.getElementById("product-description").value;
  const price = document.getElementById("product-price").value;
  const image = document.getElementById("product-image").value;

  if (!name || !desc || !price || !image) {
    alert("Semua field harus diisi!");
    return;
  }

  const newProduct = {
    id: Date.now(),
    name,
    desc,
    price,
    image
  };

  const products = JSON.parse(localStorage.getItem("products")) || [];
  products.push(newProduct);
  localStorage.setItem("products", JSON.stringify(products));

  productForm.reset();
  loadProducts();
});

// Hapus Produk
function deleteProduct(id) {
  if (!confirm("Yakin ingin menghapus produk ini?")) return;
  let products = JSON.parse(localStorage.getItem("products")) || [];
  products = products.filter(p => p.id !== id);
  localStorage.setItem("products", JSON.stringify(products));
  loadProducts();
}

// Tampilkan Produk
function loadProducts() {
  const products = JSON.parse(localStorage.getItem("products")) || [];
  productList.innerHTML = "";

  if (products.length === 0) {
    productList.innerHTML = "<p>Belum ada produk.</p>";
    return;
  }

  products.forEach(product => {
    const item = document.createElement("div");
    item.classList.add("product-item");
    item.innerHTML = `
      <h3>${product.name}</h3>
      <img src="${product.image}" alt="${product.name}" width="100">
      <p>${product.desc}</p>
      <p>Rp ${product.price}</p>
      <button onclick="deleteProduct(${product.id})">Hapus</button>
    `;
    productList.appendChild(item);
  });
}
