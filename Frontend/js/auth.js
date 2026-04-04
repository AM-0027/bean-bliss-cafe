function showAuthTab(tab, clickedBtn = null) {
  const tabButtons = document.querySelectorAll(".tab-btn");
  const loginTab = document.getElementById("loginTab");
  const signupTab = document.getElementById("signupTab");

  tabButtons.forEach(btn => btn.classList.remove("active"));

  if (clickedBtn) {
    clickedBtn.classList.add("active");
  } else {
    if (tab === "login") tabButtons[0].classList.add("active");
    else tabButtons[1].classList.add("active");
  }

  loginTab.classList.remove("active");
  signupTab.classList.remove("active");

  setTimeout(() => {
    if (tab === "login") {
      loginTab.classList.add("active");
    } else {
      signupTab.classList.add("active");
    }
  }, 80);
}
function signupUser() {
  const username = document.getElementById("signupUsername").value.trim();
  const password = document.getElementById("signupPassword").value.trim();
  const role = document.getElementById("signupRole").value;

  if (!username || !password) {
    alert("Please fill all fields!");
    return;
  }

  const exists = users.find(user => user.username === username);
  if (exists) {
    alert("Username already exists!");
    return;
  }

  users.push({ username, password, role });
  saveData();
  alert("Signup successful! Please login.");
  showAuthTab("login");
}

function loginUser() {
  const username = document.getElementById("loginUsername").value.trim();
  const password = document.getElementById("loginPassword").value.trim();
  const role = document.getElementById("loginRole").value;

  const user = users.find(
    u => u.username === username && u.password === password && u.role === role
  );

  if (!user) {
    alert("Invalid credentials!");
    return;
  }

  currentUser = user;
  saveData();

  if (user.role === "admin") {
    window.location.href = "pages/admin.html";
  } else {
    window.location.href = "pages/customer.html";
  }
}