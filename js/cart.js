const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
const container = document.getElementById('cart-items');
const totalDisplay = document.getElementById('total');

let total = 0;

if (cartItems.length === 0) {
    container.innerHTML = "<p>Your cart is empty.</p>";
} else {
    cartItems.forEach((item, index) => {
        total += item.price;

        const itemDiv = document.createElement('div');
        itemDiv.classList.add('cart-item');
        itemDiv.innerHTML = `
            <h4>${item.name}</h4>
            <p>${item.desc}</p>
            <p><strong>Price:</strong> $${item.price.toFixed(2)}</p>
        `;
        container.appendChild(itemDiv);
    });

    totalDisplay.textContent = `Total: $${total.toFixed(2)}`;
}
