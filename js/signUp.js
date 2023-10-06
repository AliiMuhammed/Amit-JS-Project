document.addEventListener("DOMContentLoaded", function () {
  const signUpForm = document.querySelector(".signUp-form");

  const userName = document.getElementById("userName");
  const userEmail = document.getElementById("userEmail");
  const userPassword = document.getElementById("pass");
  const userImage = document.getElementById("userImg");
  const successMessage = document.getElementById("successMessage");
  const errorMessage = document.getElementById("errorMessage");
  successMessage.style.display = "none";
  errorMessage.style.display = "none";

  signUpForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const userNameValue = userName.value.trim();
    const userEmailValue = userEmail.value.trim();
    const userPasswordValue = userPassword.value.trim();
    const userImageFile = userImage.files[0];

    // Validation checks
    if (
      userNameValue === "" ||
      userEmailValue === "" ||
      userPasswordValue === "" ||
      !userImageFile
    ) {
      successMessage.style.display = "none";
      errorMessage.style.display = "block";
      errorMessage.innerText = "Please fill in all fields and upload an image.";
      return;
    }

    // Clear any previous error messages
    errorMessage.innerText = "";

    // Read the image file as a data URL
    const reader = new FileReader();
    reader.onload = function (event) {
      const userImgDataUrl = event.target.result;

      // Create a user object with the form data
      const user = {
        name: userNameValue,
        email: userEmailValue,
        password: userPasswordValue,
        image: userImgDataUrl,
      };

      // Get existing user data from localStorage or initialize an empty array
      const existingUserData = localStorage.getItem("allUsersData");
      const allUsersData = existingUserData ? JSON.parse(existingUserData) : [];

      // Add the new user to the array
      allUsersData.push(user);

      // Save the updated array back to localStorage
      localStorage.setItem("allUsersData", JSON.stringify(allUsersData));

      // Clear the form fields
      userName.value = "";
      userEmail.value = "";
      userPassword.value = "";
      userImage.value = null;

      // Display a success message
      errorMessage.style.display = "none";
      successMessage.style.display = "block";
      successMessage.innerText = "Registration successful!";
    };

    // Read the image data as a data URL
    reader.readAsDataURL(userImageFile);
  });
});
