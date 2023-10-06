document.addEventListener("DOMContentLoaded", function () {
  const profileImg = document.querySelector(".profile-img");
  const userNameElement = document.querySelector(".userName");
  const userEmailElement = document.querySelector(".userEmail span");
  const userTimeLogin = document.querySelector(".TimeLogin span");

  // Get the loggedInUser data from local storage
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

  if (loggedInUser) {
    // If loggedInUser data exists in local storage
    const { userName, userEmail, userImg, loginTime } = loggedInUser;

    // Display user data in the profile section
    profileImg.style.backgroundImage = `url(${userImg})`;
    userNameElement.textContent = userName;
    userEmailElement.textContent = userEmail;
    userTimeLogin.textContent = loginTime;
  }
});
