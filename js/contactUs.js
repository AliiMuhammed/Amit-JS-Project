document.addEventListener("DOMContentLoaded", function () {
  const stars = document.querySelectorAll(".rating .star");
  let userRating = 0; // Variable to store the user's rating

  stars.forEach((star) => {
    star.addEventListener("click", (e) => {
      const rating = parseInt(e.currentTarget.getAttribute("data-rating"));
      userRating = rating; // Update the user's rating

      resetStars();
      highlightStars(userRating);
    });
  });

  function resetStars() {
    stars.forEach((star) => {
      star.classList.remove("active");
    });
  }

  function highlightStars(rating) {
    for (let i = 0; i < rating; i++) {
      stars[i].classList.add("active");
    }
  }

  const feedbackForm = document.querySelector(".contact-form");
  const errorMsg = document.querySelector(".error");
  errorMsg.style.display = "none";
  feedbackForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const userName = document.getElementById("userName").value.trim();
    const userEmail = document.getElementById("userEmail").value.trim();
    const feedbackMsg = document.getElementById("feedbackMsg").value.trim();
    const rating = userRating; // Get the user's rating

    // Check if any of the form fields are empty
    if (!userName || !userEmail || !feedbackMsg || !rating) {
      errorMsg.textContent = "Please fill in all the required fields.";
      errorMsg.style.display = "block"; // Display the error message
    } else {
      errorMsg.style.display = "none";

      const feedback = {
        userName: userName,
        userEmail: userEmail,
        feedbackMsg: feedbackMsg,
        rating: rating,
      };

      // Get existing feedbacks data from localStorage
      const existingFeedbacks = localStorage.getItem("allFeedbacks");
      const allFeedbacks = existingFeedbacks
        ? JSON.parse(existingFeedbacks)
        : [];

      // Add the new feedback to the array
      allFeedbacks.push(feedback);

      // Save the updated array back to localStorage
      localStorage.setItem("allFeedbacks", JSON.stringify(allFeedbacks));

      // Clear the form
      feedbackForm.reset();

      // Reset userRating to 0 and clear active stars
      userRating = 0;
      resetStars();

      // Create and append the feedback card to the container
      const feedbackCard = createFeedbackCard(feedback);
      const feedbackContainer = document.querySelector(".feedback-cards");
      feedbackContainer.appendChild(feedbackCard);
    }
  });

  // Function to create HTML for a feedback card
  function createFeedbackCard(feedback) {
    const card = document.createElement("div");
    card.classList.add("card");

    // Create the top section of the card
    const top = document.createElement("div");
    top.classList.add("top");

    const fLetter = document.createElement("div");
    fLetter.classList.add("fLetter");
    fLetter.textContent = feedback.userName.charAt(0).toUpperCase();

    const nameTime = document.createElement("div");
    nameTime.classList.add("name-time");

    const name = document.createElement("div");
    name.classList.add("name");
    name.textContent = feedback.userName;

    const time = document.createElement("div");
    time.classList.add("time");
    time.textContent = new Date().toLocaleString(); // Use the current date and time, or you can use the feedback's timestamp

    nameTime.appendChild(name);
    nameTime.appendChild(time);

    top.appendChild(fLetter);
    top.appendChild(nameTime);

    // Create the bottom section of the card
    const bottom = document.createElement("div");
    bottom.classList.add("bottom");

    const rate = document.createElement("div");
    rate.classList.add("rate");

    // Create and highlight stars based on the feedback's rating
    for (let i = 0; i < feedback.rating; i++) {
      const starSpan = document.createElement("span");
      starSpan.classList.add("star", "active");
      const starIcon = document.createElement("i");
      starIcon.classList.add("fas", "fa-star");
      starSpan.appendChild(starIcon);
      rate.appendChild(starSpan);
    }

    const comment = document.createElement("div");
    comment.classList.add("comment");
    comment.textContent = feedback.feedbackMsg;

    bottom.appendChild(rate);
    bottom.appendChild(comment);

    card.appendChild(top);
    card.appendChild(bottom);

    return card;
  }

  // Get existing feedbacks data from localStorage
  const existingFeedbacks = localStorage.getItem("allFeedbacks");
  const allFeedbacks = existingFeedbacks ? JSON.parse(existingFeedbacks) : [];

  // Loop through the feedbacks and create cards for each
  const feedbackContainer = document.querySelector(".feedback-cards");
  allFeedbacks.forEach((feedback) => {
    const feedbackCard = createFeedbackCard(feedback);
    feedbackContainer.appendChild(feedbackCard);
  });
});
