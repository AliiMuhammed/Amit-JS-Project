document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.querySelector(".login-form");
  const userName = document.getElementById("userName");
  const password = document.getElementById("pass");
  const errorMessage = document.getElementById("errorMessage");

  errorMessage.style.display = "none";

  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const userNameValue = userName.value.trim();
    const passwordValue = password.value.trim();

    // Get existing user data from localStorage
    const existingUserData = localStorage.getItem("allUsersData");
    const allUsersData = existingUserData ? JSON.parse(existingUserData) : [];

    // Check if the user exists in the array
    const user = allUsersData.find((userData) => {
      return (
        userData.name === userNameValue && userData.password === passwordValue
      );
    });

    if (user) {
      // User found, create a user object with login time and save it in local storage
      const loggedInUser = {
        userName: user.name,
        userEmail: user.email,
        userImg: user.image,
        loginTime: new Date().toLocaleString(), // Add login time
        // Add other user properties as needed
      };

      localStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));

      // Redirect to a logged-in page (e.g., dashboard.html) upon successful login
      window.location.href = "../index.html"; // Update the URL as needed
    } else {
      // User not found, display an error message or take appropriate action
      errorMessage.style.display = "block";
      errorMessage.innerText =
        "Invalid username or password. Please try again.";
    }
  });
});
