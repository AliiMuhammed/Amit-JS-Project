const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  // Get the current scroll position
  const scrollY = window.scrollY;

  // Add the 'scrolled' class to the navbar when scrolled down 600 pixels
  if (scrollY >= 200) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});
