const stars = document.querySelectorAll(".star");
let userRating = 0; // Variable to store the user's rating

stars.forEach((star) => {
  star.addEventListener("click", (e) => {
    const rating = parseInt(e.currentTarget.getAttribute("data-rating"));
    userRating = rating; // Update the user's rating
    console.log(userRating);
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

// You can access the userRating variable to get the selected rating.
