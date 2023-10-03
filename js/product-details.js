document.addEventListener("DOMContentLoaded", () => {
  // Get the product ID from the URL parameters
  // const urlParams = new URLSearchParams(window.location.search);
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get("id");

  // Check if a product ID is available
  if (productId) {
    // Call the API to retrieve the product details
    fetch(`https://dummyjson.com/products/${productId}`)
      .then((response) => response.json())
      .then((product) => {
        // Populate the product details in the HTML elements
        const productTitleElement = document.getElementById("product-title");
        const productDescriptionElement = document.getElementById(
          "product-description"
        );
        const productCategoryElement =
          document.getElementById("product-category");
        const productPriceElement = document.getElementById("product-price");
        const productRatingElement = document.getElementById("product-rating");

        productTitleElement.textContent = `${product.title}`;
        productDescriptionElement.textContent = `${product.description}`;
        productCategoryElement.textContent = `${product.category}`;
        productPriceElement.textContent = `Price: $${product.price}`;
        productRatingElement.textContent = `${product.rating}`;

        let sliderOne = document.querySelector(".img-display .img-showcase");
        let slideTwo = document.querySelector(".img-select");

        for (let i = 0; i < product.images.length; i++) {
          const slide = document.createElement("img");
          slide.src = `${product.images[i]}`;
          sliderOne.appendChild(slide);
        }

        for (let i = 0; i < product.images.length; i++) {
          const imgItem = document.createElement("div");
          imgItem.classList.add("img-item");
          const imgLink = document.createElement("a");
          imgLink.setAttribute("data-id", i + 1);
          imgLink.innerHTML = `<img src="${product.images[i]}" alt="shoe image">`;
          imgItem.appendChild(imgLink);
          slideTwo.appendChild(imgItem);
        }

        // Attach the click event listener to a parent element
        const imgSelectContainer = document.querySelector(".img-select");
        imgSelectContainer.addEventListener("click", (event) => {
          const imgItem = event.target.closest(".img-item");
          if (imgItem) {
            event.preventDefault();
            imgId = imgItem.querySelector("a").getAttribute("data-id");
            
            slideImage();
          }
        });
      })
      .catch((error) => {
        console.error("Error fetching product data:", error);
      });
  } else {
    console.error("Product ID not found in URL parameters.");
  }
});

let imgId = 1;

function slideImage() {
  const displayWidth = document.querySelector(
    ".img-showcase img:first-child"
  ).clientWidth;

  document.querySelector(".img-showcase").style.transform = `translateX(${
    -(imgId - 1) * displayWidth
  }px)`;
}

window.addEventListener("resize", slideImage);
