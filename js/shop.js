// Function to fetch data from the API
async function fetchProductsMens() {
  try {
    const response = await fetch(
      "https://dummyjson.com/products/category/mens-shirts"
    );
    const products = await response.json();

    // Get a reference to the products-cards container

    const mainHeader = document.createElement("h1");
    mainHeader.classList.add("main-header");
    mainHeader.innerHTML = "men's shirts";
    const productsCardsContainer = document.querySelector(".products-cards");

    const productsContainer = document.createElement("div");
    productsContainer.classList.add("products");

    productsCardsContainer.appendChild(mainHeader);
    productsCardsContainer.appendChild(productsContainer);

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
      productsContainer.appendChild(card);
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
  try {
    const response = await fetch(
      "https://dummyjson.com/products/category/mens-shoes"
    );
    const products = await response.json();

    // Get a reference to the products-cards container

    const mainHeader = document.createElement("h1");
    mainHeader.classList.add("main-header");
    mainHeader.innerHTML = "men's shoes";
    const productsCardsContainer = document.querySelector(".products-cards");

    const productsContainer = document.createElement("div");
    productsContainer.classList.add("products");

    productsCardsContainer.appendChild(mainHeader);
    productsCardsContainer.appendChild(productsContainer);

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
      productsContainer.appendChild(card);
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
  try {
    const response = await fetch(
      "https://dummyjson.com/products/category/mens-watches"
    );
    const products = await response.json();

    // Get a reference to the products-cards container

    const mainHeader = document.createElement("h1");
    mainHeader.classList.add("main-header");
    mainHeader.innerHTML = "men's watches";
    const productsCardsContainer = document.querySelector(".products-cards");

    const productsContainer = document.createElement("div");
    productsContainer.classList.add("products");

    productsCardsContainer.appendChild(mainHeader);
    productsCardsContainer.appendChild(productsContainer);

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
      productsContainer.appendChild(card);
    }
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

    const mainHeader = document.createElement("h1");
    mainHeader.classList.add("main-header");
    mainHeader.innerHTML = "women's dresses";
    const productsCardsContainer = document.querySelector(".products-cards");

    const productsContainer = document.createElement("div");
    productsContainer.classList.add("products");

    productsCardsContainer.appendChild(mainHeader);
    productsCardsContainer.appendChild(productsContainer);

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
      productsContainer.appendChild(card);
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }

  try {
    const response = await fetch(
      "https://dummyjson.com/products/category/womens-shoes"
    );
    const products = await response.json();

    // Get a reference to the products-cards container

    const mainHeader = document.createElement("h1");
    mainHeader.classList.add("main-header");
    mainHeader.innerHTML = "women's shoes";
    const productsCardsContainer = document.querySelector(".products-cards");

    const productsContainer = document.createElement("div");
    productsContainer.classList.add("products");

    productsCardsContainer.appendChild(mainHeader);
    productsCardsContainer.appendChild(productsContainer);

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
      productsContainer.appendChild(card);
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
  try {
    const response = await fetch(
      "https://dummyjson.com/products/category/womens-jewellery"
    );
    const products = await response.json();

    // Get a reference to the products-cards container

    const mainHeader = document.createElement("h1");
    mainHeader.classList.add("main-header");
    mainHeader.innerHTML = "women's jewellery";
    const productsCardsContainer = document.querySelector(".products-cards");

    const productsContainer = document.createElement("div");
    productsContainer.classList.add("products");

    productsCardsContainer.appendChild(mainHeader);
    productsCardsContainer.appendChild(productsContainer);

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
      productsContainer.appendChild(card);
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
async function fetchSunglasses() {
  try {
    const response = await fetch(
      "https://dummyjson.com/products/category/sunglasses"
    );
    const products = await response.json();

    // Get a reference to the products-cards container

    const mainHeader = document.createElement("h1");
    mainHeader.classList.add("main-header");
    mainHeader.innerHTML = "sunglasses";
    const productsCardsContainer = document.querySelector(".products-cards");

    const productsContainer = document.createElement("div");
    productsContainer.classList.add("products");

    productsCardsContainer.appendChild(mainHeader);
    productsCardsContainer.appendChild(productsContainer);

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
      productsContainer.appendChild(card);
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
// Call the fetchProducts function to populate the cards
fetchProductsMens();
fetchProductsWomens();
fetchSunglasses();
