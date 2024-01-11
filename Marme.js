// You can add your JavaScript logic for fetching data from the API
// and dynamically populating the product cards here.

// Example usage:

const menProductsContainer = document.getElementById('men-products');
const womenProductsContainer = document.getElementById('women-products');
const kidsProductsContainer = document.getElementById('kids-products');

function createProductCard(product) {
    const discountPercentage = calculateDiscountPercentage(product.price, product.compare_at_price);

    const productCard = document.createElement('div');
    productCard.className = 'product-card';

    productCard.innerHTML = `
        <img src="${product.image}" alt="${product.title}">
        <span class="badge">${product.badge_text || ''}</span>
        <h3>${product.title}</h3>
        <p>Vendor: ${product.vendor}</p>
        <p>Price: $${product.price}</p>
        <p>Compare at Price: $${product.compare_at_price}</p>
        <p>Discount: <span id="discount">${discountPercentage}</span> off</p>
        <button>Add to Cart</button>
    `;

    return productCard;
}

function calculateDiscountPercentage(price, compareAtPrice) {
    const discount = ((compareAtPrice - price) / compareAtPrice) * 100;
    return discount.toFixed(2) + '%';
}

// Populate Men's Products
const menProducts = [
    // Populate with actual data from the API response
];
menProducts.forEach(product => {
    menProductsContainer.appendChild(createProductCard(product));
});

// Similar logic for Women's and Kids' menProductsContainer