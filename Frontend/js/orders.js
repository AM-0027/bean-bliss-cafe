function renderCustomerOrders() {
  if (!currentUser || currentUser.role !== "customer") {
    window.location.href = "../index.html";
    return;
  }

  const list = document.getElementById("customerOrdersList");
  const myOrders = orders.filter(order => order.username === currentUser.username);

  if (myOrders.length === 0) {
    list.innerHTML = "<p style='padding:30px;'>No orders placed yet.</p>";
    return;
  }

  list.innerHTML = "";

  myOrders.slice().reverse().forEach(order => {
    list.innerHTML += `
      <div class="order-card">
        <h3>Order #${order.id}</h3>
        <p><strong>Date:</strong> ${order.date}</p>
        <p><strong>Table:</strong> ${order.tableNumber}</p>
        <p><strong>Items:</strong> ${order.items.map(i => `${i.name} x${i.qty}`).join(", ")}</p>
        <p><strong>Total:</strong> ₹${order.total}</p>
        <p><strong>Status:</strong> ${order.status}</p>
      </div>
    `;
  });
}