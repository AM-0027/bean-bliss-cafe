function initAdminPage() {
  if (!currentUser || currentUser.role !== "admin") {
    window.location.href = "../index.html";
    return;
  }

  const welcome = document.getElementById("adminWelcome");
  if (welcome) {
    welcome.innerText = `👋 ${currentUser.username}`;
  }

  renderAdminDashboard();
}

function renderAdminDashboard() {
  document.getElementById("totalOrders").innerText = orders.length;
  document.getElementById("totalRevenue").innerText = orders.reduce((sum, order) => sum + order.total, 0);
  document.getElementById("totalUsers").innerText = users.length;

  const table = document.getElementById("adminOrdersTable");
  if (!table) return;

  table.innerHTML = "";

  if (orders.length === 0) {
    table.innerHTML = `<tr><td colspan="7">No orders found.</td></tr>`;
    return;
  }

  orders.slice().reverse().forEach((order, index) => {
    table.innerHTML += `
      <tr>
        <td>${index + 1}</td>
        <td>${order.username}</td>
        <td>${order.items.map(i => `${i.name} x${i.qty}`).join(", ")}</td>
        <td>${order.tableNumber}</td>
        <td>₹${order.total}</td>
        <td><span class="status ${order.status.toLowerCase()}">${order.status}</span></td>
        <td>
          <select onchange="updateOrderStatus(${order.id}, this.value)">
            <option value="Pending" ${order.status === "Pending" ? "selected" : ""}>Pending</option>
            <option value="Preparing" ${order.status === "Preparing" ? "selected" : ""}>Preparing</option>
            <option value="Completed" ${order.status === "Completed" ? "selected" : ""}>Completed</option>
          </select>
        </td>
      </tr>
    `;
  });
}

function updateOrderStatus(orderId, newStatus) {
  const order = orders.find(o => o.id === orderId);
  if (order) {
    order.status = newStatus;
    saveData();
    renderAdminDashboard();
  }
}

// Open modal
function openAddItemModal() {
  const modal = document.getElementById("addItemModal");
  if (modal) {
    modal.style.display = "flex";
  }
}

// Close modal
function closeAddItemModal() {
  const modal = document.getElementById("addItemModal");
  if (modal) {
    modal.style.display = "none";
  }
}

// Wait until DOM is ready
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("addItemForm");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("itemName").value.trim();
      const desc = document.getElementById("itemDesc").value.trim();
      const price = parseFloat(document.getElementById("itemPrice").value);
      const image = document.getElementById("itemImage").value.trim();
      const category = document.getElementById("itemCategory").value.trim().toLowerCase();

      if (!name || !desc || !image || !category || isNaN(price)) {
        alert("Please fill all fields correctly.");
        return;
      }

      let menu = JSON.parse(localStorage.getItem("menuItems")) || [];

      const alreadyExists = menu.some(item => item.name.toLowerCase() === name.toLowerCase());

      if (alreadyExists) {
        alert("This item already exists in the menu!");
        return;
      }

      // Inside the form submit listener in admin.js
const newItem = {
  id: Date.now(), // Store as a number to match your default menuItems.js style
  name,
  desc,
  price,
  image,
  category
};

      menu.push(newItem);
      localStorage.setItem("menuItems", JSON.stringify(menu));

      const msg = document.getElementById("addItemMessage");
      msg.innerText = `${newItem.name} added successfully!`;

      form.reset();

      setTimeout(() => {
        closeAddItemModal();
        msg.innerText = "";
      }, 1200);
    });
  }
});