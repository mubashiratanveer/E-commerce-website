let cart = [];

function addToCart(productName, price) {
    const product = { name: productName, price: price, quantity: 1 };
    const existingProductIndex = cart.findIndex(item => item.name === productName);
    
    if (existingProductIndex >= 0) {
        cart[existingProductIndex].quantity++;
    } else {
        cart.push(product);
    }
    
    updateCart();
}

function removeFromCart(productName) {
    cart = cart.filter(item => item.name !== productName);
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const totalPrice = document.getElementById('total-price');
    cartItems.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price} x ${item.quantity}`;
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.onclick = () => removeFromCart(item.name);
        li.appendChild(removeButton);
        cartItems.appendChild(li);
        total += item.price * item.quantity;
    });

    totalPrice.textContent = total;
}


let reviews = [];

function addReview() {
    const reviewInput = document.getElementById('review-input').value;
    
    if (reviewInput === '') {
        alert('Please enter a review.');
        return;
    }
    
    reviews.push(reviewInput);
    updateReviews();
    document.getElementById('review-input').value = '';
}

function updateReviews() {
    const reviewList = document.getElementById('review-list');
    reviewList.innerHTML = '';
    
    reviews.forEach(review => {
        const li = document.createElement('li');
        li.textContent = review;
        reviewList.appendChild(li);
    });
}


function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('show');
}



// document.getElementById('loginForm').addEventListener('submit', function(e) {
//      e.preventDefault();

//      const username = document.getElementById('username').value;
//      const password = document.getElementById('password').value;

//      alert('Login successful');
//      window.location.href = 'checkout.html';
//  });

// document.getElementById('paymentForm').addEventListener('submit',  function(e) {
//     e.preventDefault();

//     const cardNumber = document.getElementById('cardNumber').value;
//     const expiryDate = document.getElementById('expiryDate').value;
//     const cvv = document.getElementById('cvv').value;

//         alert('Payment successful!');
//         window.location.href = '/order-confirmation.html';

//  });


// Login Form Submission
// document.getElementById('loginForm').addEventListener('submit', function(e) {
//     e.preventDefault();

//     const username = document.getElementById('username').value;
//     const password = document.getElementById('password').value;

//     // Validate login (You can add your own validation logic here)
//     if (username && password) {
//         alert('Login successful');
//         window.location.href = 'checkout.html';
//     } else {
//         alert('Please enter both username and password.');
//     }
// });

// // Payment Form Submission
// document.getElementById('paymentForm').addEventListener('submit', function(e) {
//     e.preventDefault();

//     const cardNumber = document.getElementById('cardNumber').value;
//     const expiryDate = document.getElementById('expiryDate').value;
//     const cvv = document.getElementById('cvv').value;

//     // Validate payment details
//     if (cardNumber && expiryDate && cvv) {
//         alert('Payment successful!');
//         window.location.href = 'order-confirmation.html';
//     } else {
//         alert('Please enter all required payment details.');
//     }
// });



document.addEventListener('DOMContentLoaded', function() {
    // Login Form Submission
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            // Validate login (You can add your own validation logic here)
            if (username && password) {
                alert('Login successful');
                window.location.href = 'checkout.html';
            } else {
                alert('Please enter both username and password.');
            }
        });
    }

    // Payment Form Submission
    const paymentForm = document.getElementById('paymentForm');
    if (paymentForm) {
        paymentForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const cardNumber = document.getElementById('cardNumber').value;
            const expiryDate = document.getElementById('expiryDate').value;
            const cvv = document.getElementById('cvv').value;

            // Validate payment details
            if (cardNumber && expiryDate && cvv) {
                alert('Payment successful!');
                window.location.href = 'order-confirmation.html';
            } else {
                alert('Please enter all required payment details.');
            }
        });
    }
});
