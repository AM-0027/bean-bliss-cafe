function loadPaymentPage() {
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  document.getElementById("paymentAmount").innerText = total;
}

function placeOrder() {
  const cardName = document.getElementById("cardName").value.trim();
  const cardNumber = document.getElementById("cardNumber").value.trim();
  const expiry = document.getElementById("expiry").value.trim();
  const cvv = document.getElementById("cvv").value.trim();

  if (!cardName || !cardNumber || !expiry || !cvv) {
    alert("Please fill all payment details!");
    return;
  }

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const tableNumber = localStorage.getItem("tableNumber");

  const newOrder = {
    id: Date.now(),
    username: currentUser.username,
    items: [...cart],
    tableNumber,
    total,
    status: "Pending",
    date: new Date().toLocaleString()
  };

  orders.push(newOrder);
  cart = [];
  saveData();

  alert("Order placed successfully! ☕");
  window.location.href = "orders.html";
}