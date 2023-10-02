let btn = document.getElementById("scroll-to-top");

window.onscroll = () => {
  if (window.scrollY >= 200) {
    btn.style.display = "flex";
  } else {
    btn.style.display = "none";
  }
};

btn.onclick = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
