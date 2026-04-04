let users = JSON.parse(localStorage.getItem("users")) || [
  { username: "admin", password: "admin123", role: "admin" },
  { username: "customer", password: "cust123", role: "customer" }
];

let orders = JSON.parse(localStorage.getItem("orders")) || [];
let cart = JSON.parse(localStorage.getItem("cart")) || [];
let currentUser = JSON.parse(localStorage.getItem("currentUser")) || null;

function saveData() {
  localStorage.setItem("users", JSON.stringify(users));
  localStorage.setItem("orders", JSON.stringify(orders));
  localStorage.setItem("cart", JSON.stringify(cart));
  localStorage.setItem("currentUser", JSON.stringify(currentUser));
}

function logout() {
  localStorage.removeItem("currentUser");
  localStorage.removeItem("cart");
  currentUser = null;
  cart = [];
  window.location.href = "../index.html";
}

function goToOrders() {
  window.location.href = "orders.html";
}

function goBackCustomer() {
  window.location.href = "customer.html";
}