const loginBtn = document.getElementById("login-icon");
const logoutBtn = document.getElementById("logout-icon");
const profileBtn = document.getElementById("profile-icon");

if (JSON.parse(localStorage.getItem("loggedInUser"))) {
  loginBtn.style.display = "none";
} else {
  logoutBtn.style.display = "none";
  profileBtn.style.display = "none";
}

logoutBtn.addEventListener("click", () => {
  localStorage.removeItem("loggedInUser");
  // Navigate to index.html and reload the page
  window.location.href = "../index.html";
});
