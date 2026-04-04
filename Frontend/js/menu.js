let activeCategory = "All";
let searchQuery = "";

// Get all menu items (default + admin added)
function getAllMenuItems() {
  const adminMenu = JSON.parse(localStorage.getItem("menuItems")) || [];

  // Normalize admin items
  const cleanedAdminMenu = adminMenu.map(item => ({
    ...item,
    category: item.category ? item.category.toLowerCase() : "snacks"
  }));

  // Normalize default menu too
  const cleanedDefaultMenu = menuItems.map(item => ({
    ...item,
    category: item.category ? item.category.toLowerCase() : "uncategorized"
  }));

  return [...cleanedDefaultMenu, ...cleanedAdminMenu];
}

function initCustomerPage() {
  if (!currentUser || currentUser.role !== "customer") {
    window.location.href = "../index.html";
    return;
  }

  document.getElementById("customerWelcome").innerText = `👋 ${currentUser.username}`;
  renderCategoryButtons();
  applyFilters();
  updateCartCount();
  initTheme();
}

function renderCategoryButtons() {
  const categoryContainer = document.getElementById("categoryContainer");
  if (!categoryContainer) return;

  const allItems = getAllMenuItems();

  const categories = ["All", ...new Set(allItems.map(item => capitalize(item.category)))];

  categoryContainer.innerHTML = categories.map(cat => `
    <button class="category-btn ${cat === "All" ? "active" : ""}" onclick="filterMenu('${cat}', this)">
      ${cat}
    </button>
  `).join("");
}

function renderMenu(filteredItems = getAllMenuItems()) {
  const menuContainer = document.getElementById("menuContainer");
  if (!menuContainer) return;

  menuContainer.innerHTML = "";

  if (filteredItems.length === 0) {
    menuContainer.innerHTML = `
      <div class="no-results">
        <h3>😕 No items found</h3>
        <p>Try searching something else or choose another category.</p>
      </div>
    `;
    return;
  }

  filteredItems.forEach((item, index) => {
    menuContainer.innerHTML += `
      <div class="menu-card fade-up" style="animation-delay:${index * 0.06}s">
        <div class="menu-img-wrap">
          <img src="${item.image}" alt="${item.name}">
          <span class="menu-badge">${capitalize(item.category || "snacks")}</span>
        </div>
        <div class="menu-card-content">
          <h3>${item.name}</h3>
          <p>${item.desc}</p>
          <div class="price-row">
            <div class="price">₹${item.price}</div>
            <button class="add-btn" onclick="animateAddToCart(${item.id}, this)">Add</button>
            <button class="del-btn" onclick="animateDel"(${item.id}, this)">Delete</button>
            </div>
        </div>
      </div>
    `;
  });
}

function filterMenu(category, btn) {
  activeCategory = category;

  document.querySelectorAll(".category-btn").forEach(b => b.classList.remove("active"));
  if (btn) btn.classList.add("active");

  applyFilters();
}

function searchMenu() {
  const searchInput = document.getElementById("menuSearch");
  searchQuery = searchInput.value.toLowerCase().trim();

  applyFilters();
}

function applyFilters() {
  let filtered = [...getAllMenuItems()];

  // Apply category filter
  if (activeCategory !== "All") {
    filtered = filtered.filter(item =>
      item.category.toLowerCase() === activeCategory.toLowerCase()
    );
  }

  // Apply search filter
  if (searchQuery !== "") {
    filtered = filtered.filter(item =>
      item.name.toLowerCase().includes(searchQuery) ||
      item.desc.toLowerCase().includes(searchQuery) ||
      item.category.toLowerCase().includes(searchQuery)
    );
  }

  renderMenu(filtered);
}

function animateAddToCart(itemId, btn) {
  addToCart(itemId);
  updateCartCount();

  btn.classList.add("added");
  btn.innerText = "Added ✓";

  const cartBtn = document.getElementById("cartBtn");
  if (cartBtn) {
    cartBtn.classList.add("bounce");
    setTimeout(() => {
      cartBtn.classList.remove("bounce");
    }, 500);
  }

  setTimeout(() => {
    openCart();
  }, 250);

  setTimeout(() => {
    btn.classList.remove("added");
    btn.innerText = "Add";
  }, 1200);
}

function animateDel(itemId, btn){
  
}

function addToCart(itemId) {
  const allItems = getAllMenuItems();
  const item = allItems.find(i => i.id === itemId);

  if (!item) return;

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  const existingItem = cart.find(cartItem => cartItem.id === item.id);

  if (existingItem) {
    existingItem.qty += 1;
  } else {
    cart.push({ ...item, qty: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
}

function scrollToMenu() {
  document.getElementById("menuSection").scrollIntoView({ behavior: "smooth" });
}

function toggleTheme() {
  document.body.classList.toggle("dark-mode");

  const currentTheme = document.body.classList.contains("dark-mode") ? "dark" : "light";
  localStorage.setItem("cafeTheme", currentTheme);

  const themeIcon = document.getElementById("themeIcon");
  if (themeIcon) {
    themeIcon.innerText = currentTheme === "dark" ? "☀️" : "🌙";
  }
}

function initTheme() {
  const savedTheme = localStorage.getItem("cafeTheme");

  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
  }

  const themeIcon = document.getElementById("themeIcon");
  if (themeIcon) {
    themeIcon.innerText = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
  }
}

// Capitalize helper
function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}