// script.js
const API_URL = "https://fakestoreapi.com/products?limit=4";

const container = document.getElementById("product-container");
const loadingEl = document.getElementById("loading");
const errorEl = document.getElementById("error");

async function loadProducts() {
  loadingEl.style.display = "block";
  errorEl.hidden = true;

  try {
    const res = await fetch(API_URL);
    if (!res.ok) throw new Error("Network error");
    const products = await res.json();

    // Generate each card
    container.innerHTML = products.map(p => {
      const title = p.title || "Product";
      const price = p.price ? `$${p.price.toFixed(2)}` : "$0.00";
      const img = p.image || "images/product-placeholder.png";
      const rating = p.rating?.rate ? `⭐ ${p.rating.rate}/5` : "⭐ N/A";
      const desc = (p.description || "").slice(0, 80);

      return `
        <div class="product-card">
          <img src="${img}" alt="${title}">
          <h3>${title}</h3>
          <p class="details">${desc}...</p>
          <div class="bottom-row">
            <span class="price">${price}</span>
            <span class="rating">${rating}</span>
          </div>
        </div>
      `;
    }).join("");

  } catch (err) {
    console.error(err);
    errorEl.hidden = false;
    errorEl.textContent = "Failed to load products. Try again.";
  } finally {
    loadingEl.style.display = "none";
  }
}

loadProducts();
