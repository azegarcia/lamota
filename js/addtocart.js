document.addEventListener("DOMContentLoaded", function () {
    // Initialize cart safely
    let cart = [];

    try {
        const storedCart = JSON.parse(localStorage.getItem('cart'));
        cart = Array.isArray(storedCart) ? storedCart : [];
    } catch (error) {
        console.error("Failed to parse cart from localStorage:", error);
        cart = [];
    }

    // Ensure element exists before accessing
    const cartCount = document.getElementById('cart-count');
    if (cartCount) {
        cartCount.textContent = cart.length;
    }

    // Add to cart buttons
    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            const name = button.getAttribute('data-name');
            const desc = button.getAttribute('data-desc');
            const priceText = button.parentElement.querySelector('.fs-5').textContent.replace('$', '');
            const price = parseFloat(priceText);

            const item = { name, desc, price };
            cart.push(item);
            localStorage.setItem('cart', JSON.stringify(cart));

            if (cartCount) {
                cartCount.textContent = cart.length;
            }
        });
    });
});