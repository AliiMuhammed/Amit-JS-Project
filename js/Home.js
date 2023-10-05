// Function to fetch data from the API
async function fetchProductsMens() {
  try {
    const response = await fetch(
      "https://dummyjson.com/products/category/mens-shirts"
    );
    const products = await response.json();

    // Get a reference to the products-cards container

    const productsCardsContainer = document.querySelector(".products-cards");

    // Loop through the first 8 products and create a card for each
    for (let i = 0; i < 4; i++) {
      const product = products.products[i];
      const card = document.createElement("div");
      card.classList.add("card");
      // Include the product ID as a data attribute
      card.setAttribute("data-product-id", product.id);

      card.innerHTML = `
        <div class="img-product" style="background-image:url(${product.thumbnail})">
          <a href="#">quick view</a>
        </div>
        <div class="card-content">
          <span class="category">${product.category}</span>
          <a class="card-title" href="#">${product.title}</a>
          <div class="card-bottom">
          <div class="rate">
          <i class="fa-solid fa-star"></i>
              <span>${product.rating}</span>
          </div>
          <span class="price">$${product.price}</span>
          </div>
        </div>
      `;
      productsCardsContainer.appendChild(card);
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
async function fetchProductsWomens() {
  try {
    const response = await fetch(
      "https://dummyjson.com/products/category/womens-dresses"
    );
    const products = await response.json();

    // Get a reference to the products-cards container

    const productsCardsContainer = document.querySelector(".products-cards");

    // Loop through the first 8 products and create a card for each
    for (let i = 0; i < 4; i++) {
      const product = products.products[i];
      const card = document.createElement("div");
      card.classList.add("card");
      // Include the product ID as a data attribute
      card.setAttribute("data-product-id", product.id);

      card.innerHTML = `
        <div class="img-product" style="background-image:url(${product.thumbnail})">
          <a href="#">quick view</a>
        </div>
        <div class="card-content">
          <span class="category">${product.category}</span>
          <a class="card-title" href="#">${product.title}</a>
          <div class="card-bottom">
          <div class="rate">
          <i class="fa-solid fa-star"></i>
              <span>${product.rating}</span>
          </div>
          <span class="price">$${product.price}</span>
          </div>
        </div>
      `;
      productsCardsContainer.appendChild(card);
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

// Call the fetchProducts function to populate the cards
fetchProductsMens();
fetchProductsWomens();

// Function to open the product details page with the selected product ID
function openProductDetailsPage(productId) {
  // Construct the URL with the product ID as a parameter
  const url = `product-details.html?id=${encodeURIComponent(productId)}`;

  // Open the product details page in a new tab or window
  window.location.href = url;
}

// Add event listeners to the "Quick View" links
document.addEventListener("click", (event) => {
  if (event.target && event.target.matches(".img-product a")) {
    // Prevent the default link behavior
    event.preventDefault();

    // Find the parent card element
    const card = event.target.closest(".card");

    // Get the product ID from the card (assuming it's stored as a data attribute)
    const productId = card.getAttribute("data-product-id");

    // Open the product details page with the selected product ID
    openProductDetailsPage(productId);
  }
});
