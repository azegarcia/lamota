let cart = [];
const cartCountEl = document.getElementById('cart-count');

console.log(cartCountEl)

// Add to cart buttons
document.querySelectorAll('.add-to-cart').forEach(button => {
button.addEventListener('click', function () {
    const name = this.getAttribute('data-name');
    const desc = this.getAttribute('data-desc');

    // Push to cart array
    cart.push({ name, desc });

    // Update cart count
    cartCountEl.textContent = cart.length;
    alert(`${name} added to cart!`);
    });
});