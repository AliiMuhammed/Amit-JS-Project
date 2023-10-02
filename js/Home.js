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
    console.log(products.products.length);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

// Function to fetch data from the API
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
    console.log(products.products.length);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

// Call the fetchProducts function to populate the cards
fetchProductsMens();
fetchProductsWomens();
