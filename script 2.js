// Sample product data (you can replace this with your actual products)
const products = [
    {
        id: 1,
        name: "Men's Sandals",
        description: "Comfortable and durable men's sandals for everyday use. Click on age for full view. Message us on whatsapp to see the diffirent sandals available",
        price: 101.00,
        images: [
            "men.jpg",
            "men1.jpg",
            "men2.jpg",
            "men3.jpg"
        ]
    },
    {
        id: 2,
        name: "Sachet Water",
        description: "Pure water sachets, 500ml, pack of 30. Click on each image for full view",
        price: 11.00,
        images: [
            "water1.jpg",
            "water2.jpg",
            "water3.jpg",
            "water4.jpg"
        ]
    },
    {
        id: 3,
        name: "Women's sandals",
        description: "Beautiful, quality and affordable women's wear. Click on each image for full view",
        price: 102.00,
        images: [
            "women1.jpg",
            "women2.jpg",
            "women3.jpg",
            "women4.jpg"
        ]
    },
    {
        id: 4,
        name: "Sure: Spray",
        description: "Sweet fragrance",
        price: 55.00,
        images: [
            "sure1.jpg",
            "sure2.jpg",
            "sure3.jpg",
            "sure4.jpg"
        ]
    },
    {
        id: 5,
        name: "Sure: roll-on",
        description: "Comfortable fragrance in multiple colors.",
        price: 25.00,
        images: [
            "roll1.jpg",
            "roll2.jpg",
            "roll3.jpg",
            "roll4.jpg"
        ]
    },
    {
        id: 6,
        name: "Tertiary Application",
        description: "Apply to your dream school at the comfort of your zone. Note that the actual price is not the one stated below, kindly message us on whatsapp",
        price: 35.00,
        images: [
            "knust.jpg",
            "legon.jpg",
            "uds.jpg",
            "ucc.jpg"
        ]
    },
    {
        id: 7,
        name: "WAEC RESULTS CHECKER",
        description: "Pay for and receive your WASSCE(SCHOOL), NOVDEC, BECE  checkers at your comfort zone",
        price: 24.00,
        images: [
            "waec1.jpg",
            "waec2.jpg",
            "waec3.jpg",
            "waec4.jpg"
        ]
    },
    {
        id: 8,
        name: "Aboniki",
        description: "For fast joint and muscle pain relief",
        price: 15.00,
        images: [
            "aboniki1.jpg",
            "aboniki2.jpg",
            "aboniki3.jpg",
            "aboniki4.jpg"
        ]
    },
    {
        id: 9,
        name: "Sasso spray and coil",
        description: "Good and quality insecticide spray",
        price: 55.00,
        images: [
            "sasso1.jpg",
            "sasso2.jpg",
            "sasso3.jpg",
            "sasso4.jpg"
        ]
    },
    {
        id: 10,
        name: "Eskyzole Cream",
        description: "Elegant and spot-free face",
        price: 85.00,
        images: [
            "eskyzole1.jpg",
            "eskyzole2.jpg",
            "eskyzole3.jpg",
            "eskyzole4.jpg"
        ]
    },
    {
        id: 11,
        name: "Killit insecticide",
        description: "Comfortable and effective insecticide spray",
        price: 50.00,
        images: [
            "killit1.jpg",
            "killit2.jpg",
            "killit3.jpg",
            "killit4.jpg"
        ]
    },
    {
        id: 12,
        name: "Yazz Sanitary pad",
        description: "It's all about cleanliness",
        price: 22.00,
        images: [
            "yazz1.jpg",
            "yazz2.jpg",
            "yazz3.jpg",
            "yazz4.jpg"
        ]
    },
    {
        id: 13,
        name: "Soft Care Sanitary pad",
        description: "Clean and healthy",
        price: 35.00,
        images: [
            "soft-care1.jpg",
            "soft-care2.jpg",
            "soft-care3.jpg",
            "soft-care4.jpg"
        ]
    },
    {
        id: 14,
        name: "Mosquito Coil",
        description: "Kills all kinds of insects",
        price: 20.00,
        images: [
            "coil1.jpg",
            "coil2.jpg",
            "coil3.jpg",
            "coil4.jpg"
        ]
    },
    {
        id: 15,
        name: "Body lotions 😇",
        description: "For clean, radiant and healthy skin. You can whatsapp us for diffirent lotions amd creams",
        price: 60.00,
        images: [
            "lotion1.jpg",
            "lotion2.jpg",
            "lotion3.jpg",
            "lotion4.jpg"
        ]
    }
];

// DOM Elements
const productsGrid = document.getElementById('productsGrid');
const floatingCart = document.getElementById('floatingCart');
const cartModal = document.getElementById('cartModal');
const cartItems = document.getElementById('cartItems');
const subtotalElement = document.getElementById('subtotal');
const deliveryFeeElement = document.getElementById('deliveryFee');
const totalAmountElement = document.getElementById('totalAmount');
const checkoutBtn = document.getElementById('checkoutBtn');
const deliveryLocation = document.getElementById('deliveryLocation');
const closeCart = document.querySelector('.close-cart');
const productModal = document.getElementById('productModal');
const productModalBody = document.getElementById('productModalBody');
const closeProductModal = document.querySelector('.close-product-modal');

// Cart state
let cart = [];
let selectedImageIndex = 0;

// Initialize the app
function init() {
    renderProducts();
    setupEventListeners();
    updateCartCount();
    document.getElementById('currentYear').textContent = new Date().getFullYear();
}

// Render products to the page
function renderProducts() {
    productsGrid.innerHTML = '';
    
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card fade-in';
        productCard.innerHTML = `
            <div class="product-image">
                <img src="${product.images[0]}" alt="${product.name}">
            </div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <div class="product-price">₵${product.price.toFixed(2)}</div>
                <button class="view-details" data-id="${product.id}">View Details</button>
            </div>
        `;
        
        productsGrid.appendChild(productCard);
    });
}

// Setup event listeners
function setupEventListeners() {
    // Floating cart click
    floatingCart.addEventListener('click', () => {
        cartModal.style.display = 'flex';
        renderCartItems();
    });
    
    // Close cart modal
    closeCart.addEventListener('click', () => {
        cartModal.style.display = 'none';
    });
    
    // Close cart modal when clicking outside
    cartModal.addEventListener('click', (e) => {
        if (e.target === cartModal) {
            cartModal.style.display = 'none';
        }
    });
    
    // Close product modal
    closeProductModal.addEventListener('click', () => {
        productModal.style.display = 'none';
    });
    
    // Close product modal when clicking outside
    productModal.addEventListener('click', (e) => {
        if (e.target === productModal) {
            productModal.style.display = 'none';
        }
    });
    
    // Delivery location change
    deliveryLocation.addEventListener('change', updateOrderSummary);
    
    // Checkout button click
    checkoutBtn.addEventListener('click', handleCheckout);
    
    // View details button clicks (delegated)
    productsGrid.addEventListener('click', (e) => {
        if (e.target.classList.contains('view-details')) {
            const productId = parseInt(e.target.getAttribute('data-id'));
            openProductModal(productId);
        }
    });
    
    // Add to cart button clicks (delegated)
    productModal.addEventListener('click', (e) => {
        if (e.target.classList.contains('add-to-cart')) {
            const productId = parseInt(e.target.getAttribute('data-id'));
            const quantity = parseInt(document.querySelector(`.product-quantity[data-id="${productId}"]`).value);
            const selectedImage = document.querySelector('.modal-product-images img.active').src;
            addToCart(productId, quantity, selectedImage);
        }
    });
    
    // Product image selection in modal
    productModal.addEventListener('click', (e) => {
        if (e.target.tagName === 'IMG' && e.target.closest('.modal-product-images')) {
            document.querySelectorAll('.modal-product-images img').forEach(img => {
                img.classList.remove('active');
            });
            e.target.classList.add('active');
            selectedImageIndex = Array.from(e.target.parentElement.children).indexOf(e.target);
            document.querySelector('.main-product-image img').src = e.target.src;
        }
    });
    
    // Remove item from cart (delegated)
    cartItems.addEventListener('click', (e) => {
        if (e.target.classList.contains('cart-item-remove')) {
            const productId = parseInt(e.target.getAttribute('data-id'));
            removeFromCart(productId);
        }
    });
}

// Open product modal
function openProductModal(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    selectedImageIndex = 0;
    
    productModalBody.innerHTML = `
        <div class="modal-product-images">
            ${product.images.map((img, index) => `
                <img src="${img}" alt="${product.name} ${index + 1}" class="${index === 0 ? 'active' : ''}">
            `).join('')}
        </div>
        <div class="main-product-image">
            <img src="${product.images[0]}" alt="${product.name}">
        </div>
        <div class="modal-product-info">
            <h3>${product.name}</h3>
            <div class="modal-product-price">₵${product.price.toFixed(2)}</div>
            <p class="modal-product-description">${product.description}</p>
            <div class="modal-product-actions">
                <div class="quantity-selector">
                    <button class="quantity-minus" data-id="${product.id}">-</button>
                    <input type="number" class="product-quantity" data-id="${product.id}" value="1" min="1">
                    <button class="quantity-plus" data-id="${product.id}">+</button>
                </div>
                <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
            </div>
        </div>
    `;
    
    // Add event listeners for quantity buttons
    const minusBtn = productModalBody.querySelector('.quantity-minus');
    const plusBtn = productModalBody.querySelector('.quantity-plus');
    const quantityInput = productModalBody.querySelector('.product-quantity');
    
    minusBtn.addEventListener('click', () => {
        let value = parseInt(quantityInput.value);
        if (value > 1) {
            quantityInput.value = value - 1;
        }
    });
    
    plusBtn.addEventListener('click', () => {
        let value = parseInt(quantityInput.value);
        quantityInput.value = value + 1;
    });
    
    productModal.style.display = 'flex';
}

// Add item to cart
function addToCart(productId, quantity, selectedImage) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const existingItem = cart.find(item => item.id === productId && item.image === selectedImage);
    
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: quantity,
            image: selectedImage
        });
    }
    
    updateCartCount();
    renderCartItems();
    productModal.style.display = 'none';
    
    // Show success message
    showToast(`${product.name} added to cart!`);
}

// Remove item from cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartCount();
    renderCartItems();
    
    if (cart.length === 0) {
        deliveryLocation.value = '';
        updateOrderSummary();
    }
}

// Render cart items
function renderCartItems() {
    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="empty-cart">Your cart is empty</p>';
        checkoutBtn.disabled = true;
    } else {
        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item">
                <div class="cart-item-info">
                    <div class="cart-item-image">
                        <img src="${item.image}" alt="${item.name}">
                    </div>
                    <div class="cart-item-details">
                        <h4>${item.name}</h4>
                        <p>₵${item.price.toFixed(2)} × ${item.quantity}</p>
                    </div>
                </div>
                <div class="cart-item-price">
                    ₵${(item.price * item.quantity).toFixed(2)}
                </div>
                <div class="cart-item-remove" data-id="${item.id}">
                    <i class="fas fa-times"></i>
                </div>
            </div>
        `).join('');
        checkoutBtn.disabled = false;
    }
    
    updateOrderSummary();
}

// Update cart count
function updateCartCount() {
    const count = cart.reduce((total, item) => total + item.quantity, 0);
    document.querySelector('.cart-count').textContent = count;
    
    // Animate the cart icon when items are added
    if (count > 0) {
        floatingCart.classList.add('animate');
        setTimeout(() => {
            floatingCart.classList.remove('animate');
        }, 500);
    }
}

// Update order summary
function updateOrderSummary() {
    const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    const location = deliveryLocation.value;
    let deliveryFee = 0;
    
    if (location === 'Salaga') {
        deliveryFee = 10;
    } else if (location === 'Kpembe') {
        deliveryFee = 13;
    }
    
    const total = subtotal + deliveryFee;
    
    subtotalElement.textContent = `₵${subtotal.toFixed(2)}`;
    deliveryFeeElement.textContent = `₵${deliveryFee.toFixed(2)}`;
    totalAmountElement.textContent = `₵${total.toFixed(2)}`;
}

// Handle checkout
function handleCheckout() {
    const location = deliveryLocation.value;
    
    if (!location) {
        showToast('Please select a delivery location', 'error');
        return;
    }
    
    const customerEmail = prompt('Please enter your email address for payment receipt:');
    if (!customerEmail) return;
    
    const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    const deliveryFee = location === 'Salaga' ? 10 : 13;
    const total = subtotal + deliveryFee;
    
    const handler = PaystackPop.setup({
        key: 'pk_live_8c56d91cee6884d988dd8355981e0134ab72b94b',
        email: customerEmail,
        amount: total * 100, // Convert to kobo
        currency: 'GHS',
        ref: 'TwinAzz-' + Math.floor(Math.random() * 1000000000 + 1),
        callback: function(response) {
            // On successful payment
            showToast('Payment successful! Your order has been placed.', 'success');
            
            // Here you would typically send the order details to your backend
            const orderDetails = {
                customerEmail: customerEmail,
                items: cart,
                location: location,
                subtotal: subtotal,
                deliveryFee: deliveryFee,
                total: total,
                reference: response.reference,
                transactionId: response.transaction
            };
            
            console.log('Order details:', orderDetails);
            
            // Clear the cart
            cart = [];
            updateCartCount();
            renderCartItems();
            deliveryLocation.value = '';
            cartModal.style.display = 'none';
        },
        onClose: function() {
            showToast('Payment window closed', 'warning');
        }
    });
    
    handler.openIframe();
}

// Show toast message
function showToast(message, type = 'success') {
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.textContent = message;
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.classList.add('show');
    }, 10);
    
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => {
            document.body.removeChild(toast);
        }, 300);
    }, 3000);
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', init);