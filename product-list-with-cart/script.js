// get the desserts data from json file
async function getDesserts() {
    try {
        const response = await fetch('/data.json');
        const responseData = await response.json();
        console.log(responseData)
        return responseData;
    } catch (error) {
        console.error('Error fetching Desserts:', error);
        return null;
    }
}

getDesserts().then((Desserts) => {
    if (Desserts) {
        const dessertsBox = document.querySelector('.desserts-box');
        
        for (let i = 0; i < Desserts.length; i++) {
            let dessert = Desserts[i];
            let dessertImg = dessert.image.thumbnail;
            let dessertName = dessert.name;
            let dessertCategory = dessert.category;
            let dessertPrice = dessert.price;
            
            let dessertCard = document.createElement('div');
            let addToCardBtn = document.createElement('button');
            dessertCard.className = 'dessert-card';
            
            dessertCard.innerHTML = `
                <img src='${dessertImg}' alt="${dessertName}" class="dessert-img">
                <h6 class="dessert-name">${dessertName}</h6>
                <p class="category">${dessertCategory}</p>
                <p class="price">$${dessertPrice}</p>
            `;
            
            // Add the button to the card
            dessertCard.appendChild(addToCardBtn);
            displayButtons(addToCardBtn, dessert);
            
            dessertsBox.appendChild(dessertCard);
        }
    }
})


function displayButtons(button, dessert) {
            let orderCounter = 1;
            button.className = 'add-to-cart';
            button.innerHTML = `
            <img src="/assets/images/icon-add-to-cart.svg" alt="Not Found">
            <span>Add to Cart</span>`;
            
            button.addEventListener('click', () => {
                if (button.classList.contains('add-to-cart-ordered')) {
                    // Handle increment/decrement
                    const decrementBtn = button.querySelector('img[alt="Not Found"]');
                    const incrementBtn = button.querySelector('img[alt=""]');
                    const quantitySpan = button.querySelector('span');
                    
                    if (event.target === decrementBtn) {
                        orderCounter = Math.max(1, orderCounter - 1);
                        if (orderCounter === 1) {
                            button.classList.remove('add-to-cart-ordered');
                            button.innerHTML = `
                                <img src="/assets/images/icon-add-to-cart.svg" alt="Not Found">
                                <span>Add to Cart</span>`;
                            updateCart(dessert, 0); // Remove from cart
                        } else {
                            quantitySpan.textContent = orderCounter;
                            updateCart(dessert, orderCounter); // Update cart
                        }
                    } else if (event.target === incrementBtn) {
                        orderCounter++;
                        quantitySpan.textContent = orderCounter;
                        updateCart(dessert, orderCounter); // Update cart
                    }
                } else {
                    // First click - add to cart
                    button.classList.add('add-to-cart-ordered');
                    button.innerHTML = `
                        <img src="/assets/images/icon-decrement-quantity.svg" alt="Not Found">
                        <span>${orderCounter}</span>
                        <img src="/assets/images/icon-increment-quantity.svg" alt="">
                    `;
                    updateCart(dessert, orderCounter); // Add to cart
                }
            });
}



// Cart data structure
let cartOrders = [];
let totalCartItems = 0;

function updateCart(dessert, quantity) {
    // Find existing item in cart
    const existingItemIndex = cartOrders.findIndex(item => item.name === dessert.name);
    
    if (quantity === 0) {
        // Remove item from cart
        if (existingItemIndex !== -1) {
            cartOrders.splice(existingItemIndex, 1);
        }
    } else {
        // Add or update item in cart
        if (existingItemIndex !== -1) {
            cartOrders[existingItemIndex].quantity = quantity;
        } else {
            cartOrders.push({
                name: dessert.name,
                price: dessert.price,
                quantity: quantity
            });
        }
    }
    
    // Update total cart items
    totalCartItems = cartOrders.reduce((total, item) => total + item.quantity, 0);
    
    // Update cart display
    showCart();
}

function showCart() {
    const cartBox = document.querySelector('.cart-box');
    
    if (cartOrders.length === 0) {
        cartBox.style.display = 'none';
        return;
    }
    
    cartBox.style.display = 'block';
    
    let totalOrderPrice = 0;
    let cartHTML = `<h4>Your Cart (${totalCartItems})</h4>`;
    
    cartOrders.forEach(item => {
        const itemPrice = item.quantity * item.price;
        totalOrderPrice += itemPrice;
        
        cartHTML += `
        <div class="order-info">
            <p class="name">${item.name}</p>
            <span class="order-amount">${item.quantity}</span>
            <span class="order-price">@$${item.price}</span>
            <span class="result">$${itemPrice.toFixed(2)}</span>
        </div>`;
    });
    
    cartHTML += `
        <div class="cart-total">
            <p>Order Total</p>
            <span class="total-price">$${totalOrderPrice.toFixed(2)}</span>
        </div>
        <div class="carbon-neutral">
            <img src="/assets/images/icon-carbon-neutral.svg" alt="Carbon Neutral">
            <span>This is a <strong>Carbon-neutral</strong> delivery</span>
        </div>
        <button class="confirm-order">Confirm Order</button>`;
    
    cartBox.innerHTML = cartHTML;
    
    // Add event listener to confirm order button
    const confirmBtn = cartBox.querySelector('.confirm-order');
    if (confirmBtn) {
        confirmBtn.addEventListener('click', confirmOrder);
    }
}

function confirmOrder() {
    alert(`Order confirmed! Total: $${cartOrders.reduce((total, item) => total + (item.quantity * item.price), 0).toFixed(2)}`);
    cartOrders = [];
    totalCartItems = 0;
    showCart();
    
    // Reset all buttons to "Add to Cart" state
    const allButtons = document.querySelectorAll('.add-to-cart-ordered');
    allButtons.forEach(button => {
        button.classList.remove('add-to-cart-ordered');
        button.innerHTML = `
            <img src="/assets/images/icon-add-to-cart.svg" alt="Not Found">
            <span>Add to Cart</span>`;
    });
}
