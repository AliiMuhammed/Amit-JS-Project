// const navbar = document.getElementById("navbar");

// window.addEventListener("scroll", () => {
//   // Get the current scroll position
//   const scrollY = window.scrollY;

//   // Add the 'scrolled' class to the navbar when scrolled down 100vh
//   if (scrollY >= window.innerHeight - 100) {
//     navbar.classList.add("scrolled");
//   } else {
//     navbar.classList.remove("scrolled");
//   }
// });

const navbarBtnShow = document.getElementById("bars-btn");
const navbarBtnClose = document.getElementById("close-btn");
const navLinks = document.querySelector("nav .links");


navbarBtnClose.style.display = "none";

navbarBtnShow.addEventListener("click", () => {
  navbarBtnShow.style.display = "none";
  navbarBtnClose.style.display = "block";

  if (navLinks.classList.contains("active")) {
    navLinks.classList.remove("active");
  } else {
    navLinks.classList.add("active");
  }
});

navbarBtnClose.addEventListener("click", () => {
    navbarBtnClose.style.display = "none";
    navbarBtnShow.style.display = "block";
  
    if (navLinks.classList.contains("active")) {
      navLinks.classList.remove("active");
    } else {
      navLinks.classList.add("active");
    }
  });
  

