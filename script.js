// DOM ELEMENTS

const productGrid =
  document.getElementById("products");

const searchInput =
  document.getElementById("searchInput");

const categoryFilter =
  document.getElementById("categoryFilter");

const cartItems =
  document.getElementById("cartItems");

const totalPrice =
  document.getElementById("totalPrice");

// CART STATE

let cart = [];

// RENDER PRODUCTS

function renderProducts(items) {

  productGrid.innerHTML = "";

  items.forEach(product => {

    const card =
      document.createElement("div");

    card.className = "card";

    card.innerHTML = `

      <img
        src="${product.image}"
        alt="${product.name}"
      >

      <div class="card-content">

        <h3>${product.name}</h3>

        <p><strong>₹${product.price}</strong></p>

        <p>${product.category}</p>

        <button
          onclick="addToCart(${product.id})"
        >
          Add to Cart
        </button>

      </div>

    `;

    productGrid.appendChild(card);

  });

}

// ADD TO CART

function addToCart(id) {

  const product =
    products.find(p => p.id === id);

  cart.push(product);

  renderCart();

}

// RENDER CART

function renderCart() {

  cartItems.innerHTML = "";

  let total = 0;

  cart.forEach(item => {

    total += item.price;

    const li =
      document.createElement("li");

    li.textContent =
      `${item.name} - ₹${item.price}`;

    cartItems.appendChild(li);

  });

  totalPrice.textContent =
    `Total: ₹${total}`;

}

// SEARCH + FILTER

function filterProducts() {

  const searchText =
    searchInput.value.toLowerCase();

  const category =
    categoryFilter.value;

  const filtered =
    products.filter(product => {

      const matchesSearch =
        product.name
          .toLowerCase()
          .includes(searchText);

      const matchesCategory =
        category === "all" ||
        product.category === category;

      return (
        matchesSearch &&
        matchesCategory
      );

    });

  renderProducts(filtered);

}

// EVENTS

searchInput.addEventListener(
  "input",
  filterProducts
);

categoryFilter.addEventListener(
  "change",
  filterProducts
);

// INITIAL RENDER

renderProducts(products);