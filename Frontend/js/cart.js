// In cart.js

function addToCart(id) {
  // FIX: Don't just look in menuItems. Look in BOTH default and admin items.
  // We use the function from menu.js to get the full list.
  const allItems = getAllMenuItems(); 
  
  // FIX: Use loose equality (==) because Admin IDs are Strings and 
  // Default IDs are Numbers.
  const item = allItems.find(m => m.id == id);

  if (!item) {
    console.error("Item not found for ID:", id);
    showToast("Item not found!");
    return;
  }

  const itemName = item.name || "Unnamed Item";
  const itemPrice = Number(item.price || 0);

  // Use loose equality here too for existing check
  let existing = cart.find(c => c.id == id);

  if (existing) {
    existing.qty++;
    showToast(`${itemName} quantity updated!`);
  } else {
    cart.push({
      id: item.id, // Keep original ID (don't force Number)
      name: itemName,
      price: itemPrice,
      qty: 1,
      image: item.image || ""
    });
    showToast(`${itemName} added to cart!`);
  }

  saveData();
  updateCartCount();
  renderCart();
  openCart();
}

function showToast(message) {
  const toast = document.getElementById("toastBox");
  if (!toast) {
    console.warn("toastBox not found in HTML");
    return;
  }

  toast.innerHTML = `🛒 ${message}`;
  toast.classList.remove("show", "hide");
  void toast.offsetWidth;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
    toast.classList.add("hide");
  }, 2200);

  setTimeout(() => {
    toast.classList.remove("hide");
  }, 2700);
}

function updateCartCount() {
  const count = cart.reduce((sum, item) => sum + (Number(item.qty) || 0), 0);
  document.getElementById("cartCount").innerText = count;
}

function openCart() {
  document.getElementById("cartModal").style.display = "flex";
  renderCart();
}

function closeCart() {
  document.getElementById("cartModal").style.display = "none";
}

function renderCart() {
  const cartItems = document.getElementById("cartItems");
  cartItems.innerHTML = "";

  if (cart.length === 0) {
    cartItems.innerHTML = "<p>Your cart is empty.</p>";
    document.getElementById("cartTotal").innerText = "0";
    return;
  }

  cart.forEach(item => {
    const itemName = item.name || "Unnamed Item";
    const itemPrice = Number(item.price) || 0;
    const itemQty = Number(item.qty) || 1;

    cartItems.innerHTML += `
      <div class="cart-item">
        <div>
          <h4>${itemName}</h4>
          <p>₹${itemPrice} x ${itemQty}</p>
        </div>
        <div class="cart-item-controls">
          <button onclick="changeQty(${item.id}, -1)">-</button>
          <span>${itemQty}</span>
          <button onclick="changeQty(${item.id}, 1)">+</button>
          <button onclick="removeFromCart(${item.id})">🗑️</button>
        </div>
      </div>
    `;
  });

  const total = cart.reduce((sum, item) => {
    return sum + (Number(item.price) || 0) * (Number(item.qty) || 0);
  }, 0);

  document.getElementById("cartTotal").innerText = total;
}

function changeQty(id, delta) {
  const item = cart.find(c => Number(c.id) === Number(id));
  if (!item) return;

  const itemName = item.name || "Item";

  item.qty += delta;

  if (item.qty <= 0) {
    cart = cart.filter(c => Number(c.id) !== Number(id));
    showToast(`${itemName} removed from cart!`);
  } else {
    showToast(`${itemName} quantity updated!`);
  }

  saveData();
  renderCart();
  updateCartCount();
}

function removeFromCart(id) {
  const item = cart.find(c => Number(c.id) === Number(id));
  if (!item) return;

  const itemName = item.name || "Item";

  cart = cart.filter(c => Number(c.id) !== Number(id));

  saveData();
  renderCart();
  updateCartCount();
  showToast(`${itemName} removed from cart!`);
}

function goToPayment() {
  if (cart.length === 0) {
    showToast("Your cart is empty!");
    return;
  }

  const tableNumber = document.getElementById("tableNumber").value.trim();
  if (!tableNumber) {
    showToast("Please enter table number!");
    return;
  }

  localStorage.setItem("tableNumber", tableNumber);
  showToast("Proceeding to payment...");

  setTimeout(() => {
    window.location.href = "payment.html";
  }, 1200);
}