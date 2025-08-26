document.addEventListener('DOMContentLoaded', () => {
    const addToCartBtn1 = document.getElementById('addToCartBtn1');
    const addToCartBtn2 = document.getElementById('addToCartBtn2');
    const addToCartBtn3 = document.getElementById('addToCartBtn3');
    const addToCartBtn4 = document.getElementById('addToCartBtn4');
    const cartItemsList = document.getElementById('cartItems');
    const cartTotalSpan = document.getElementById('cartTotal');

    let cart = []; // Array to store cart items

    addToCartBtn1.addEventListener('click', () => {
        const productName = addToCartBtn1.dataset.productName;
        const productPrice = parseFloat(addToCartBtn1.dataset.productPrice);

        // Check if the product is already in the cart
        const existingItem = cart.find(item => item.name === productName);

        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({ name: productName, price: productPrice, quantity: 1 });
        }

        updateCartDisplay();
    });

    addToCartBtn2.addEventListener('click', () => {
        const productName = addToCartBtn2.dataset.productName;
        const productPrice = parseFloat(addToCartBtn2.dataset.productPrice);

        // Check if the product is already in the cart
        const existingItem = cart.find(item => item.name === productName);

        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({ name: productName, price: productPrice, quantity: 1 });
        }

        updateCartDisplay();
    });

    addToCartBtn3.addEventListener('click', () => {
        const productName = addToCartBtn3.dataset.productName;
        const productPrice = parseFloat(addToCartBtn3.dataset.productPrice);

        // Check if the product is already in the cart
        const existingItem = cart.find(item => item.name === productName);

        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({ name: productName, price: productPrice, quantity: 1 });
        }

        updateCartDisplay();
    });

    addToCartBtn4.addEventListener('click', () => {
        const productName = addToCartBtn4.dataset.productName;
        const productPrice = parseFloat(addToCartBtn4.dataset.productPrice);

        // Check if the product is already in the cart
        const existingItem = cart.find(item => item.name === productName);

        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({ name: productName, price: productPrice, quantity: 1 });
        }

        updateCartDisplay();
    });

    function updateCartDisplay() {
        cartItemsList.innerHTML = ''; // Clear existing items
        let total = 0;

        cart.forEach(item => {
            const listItem = document.createElement('li');
            listItem.textContent = `${item.name} x ${item.quantity} - $${(item.price * item.quantity).toFixed(2)}`;
            cartItemsList.appendChild(listItem);
            total += item.price * item.quantity;
        });

        cartTotalSpan.textContent = total.toFixed(2);
    }
});