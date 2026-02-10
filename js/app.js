// Глобальні змінні
let cart = JSON.parse(localStorage.getItem('sushiyaroll_cart')) || [];
let currentDish = null;

// Ініціалізація при завантаженні сторінки
document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
});

function initializeApp() {
    renderCategoryFilters();
    renderMenu('all');
    updateCartUI();
    setupEventListeners();
}

// Рендерінг фільтрів категорій
function renderCategoryFilters() {
    const filterContainer = document.getElementById('categoryFilter');
    
    // Додаємо кнопку "Всі"
    const allButton = document.createElement('button');
    allButton.className = 'filter-btn active';
    allButton.setAttribute('data-category', 'all');
    allButton.textContent = 'Всі страви';
    filterContainer.appendChild(allButton);
    
    // Додаємо кнопки категорій
    categories.forEach(category => {
        const button = document.createElement('button');
        button.className = 'filter-btn';
        button.setAttribute('data-category', category);
        button.textContent = category;
        filterContainer.appendChild(button);
    });
}

// Рендерінг меню
function renderMenu(selectedCategory = 'all') {
    const menuGrid = document.getElementById('menuGrid');
    menuGrid.innerHTML = '';
    
    const filteredItems = selectedCategory === 'all' 
        ? menuData 
        : menuData.filter(item => item.category === selectedCategory);
    
    filteredItems.forEach(item => {
        const card = createMenuCard(item);
        menuGrid.appendChild(card);
    });
}

// Створення картки меню
function createMenuCard(item) {
    const card = document.createElement('div');
    card.className = 'menu-card';
    card.setAttribute('data-id', item.id);
    
    // Отримуємо перший рядок складу для превью
    const compositionPreview = item.composition.split('\n').slice(0, 2).join(' • ');
    
    card.innerHTML = `
        <img src="${item.image}" alt="${item.name}" class="menu-card-image">
        <div class="menu-card-body">
            <span class="menu-card-category">${item.category}</span>
            <h3 class="menu-card-title">${item.name}</h3>
            <p class="menu-card-composition">${compositionPreview}...</p>
            <div class="menu-card-footer">
                <span class="menu-card-weight"><i class="fas fa-weight"></i> ${item.weight}</span>
                <span class="menu-card-price">${item.price} грн</span>
            </div>
        </div>
    `;
    
    card.addEventListener('click', () => openDishModal(item));
    
    return card;
}

// Відкриття модального вікна страви
function openDishModal(dish) {
    currentDish = dish;
    
    const modal = document.getElementById('dishModal');
    const modalImage = document.getElementById('modalImage');
    const modalCategory = document.getElementById('modalCategory');
    const modalTitle = document.getElementById('modalTitle');
    const modalWeight = document.getElementById('modalWeight').querySelector('span');
    const modalPrice = document.getElementById('modalPrice');
    const modalComposition = document.getElementById('modalComposition');
    const qtyInput = document.getElementById('qtyInput');
    
    modalImage.src = dish.image;
    modalImage.alt = dish.name;
    modalCategory.textContent = dish.category;
    modalTitle.textContent = dish.name;
    modalWeight.textContent = dish.weight;
    modalPrice.textContent = `${dish.price} грн`;
    modalComposition.textContent = dish.composition;
    qtyInput.value = 1;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Закриття модального вікна страви
function closeDishModal() {
    const modal = document.getElementById('dishModal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
    currentDish = null;
}

// Додавання в кошик
function addToCart() {
    if (!currentDish) return;
    
    const quantity = parseInt(document.getElementById('qtyInput').value);
    
    const existingItem = cart.find(item => item.id === currentDish.id);
    
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            ...currentDish,
            quantity: quantity
        });
    }
    
    saveCart();
    updateCartUI();
    closeDishModal();
    
    showNotification('Додано в кошик!');
}

// Відкриття модального вікна кошика
function openCartModal() {
    const modal = document.getElementById('cartModal');
    renderCartItems();
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Закриття модального вікна кошика
function closeCartModal() {
    const modal = document.getElementById('cartModal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// Рендерінг товарів в кошику
function renderCartItems() {
    const cartBody = document.getElementById('cartBody');
    const cartModalTotal = document.getElementById('cartModalTotal');
    
    if (cart.length === 0) {
        cartBody.innerHTML = `
            <div class="cart-empty">
                <i class="fas fa-shopping-cart"></i>
                <p>Кошик порожній</p>
            </div>
        `;
        cartModalTotal.textContent = '0 грн';
        return;
    }
    
    cartBody.innerHTML = '';
    let total = 0;
    
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="cart-item-image">
            <div class="cart-item-details">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-price">${item.price} грн x ${item.quantity} = ${itemTotal} грн</div>
                <div class="cart-item-actions">
                    <div class="cart-item-qty">
                        <button onclick="updateCartItemQuantity(${item.id}, -1)">
                            <i class="fas fa-minus"></i>
                        </button>
                        <span>${item.quantity}</span>
                        <button onclick="updateCartItemQuantity(${item.id}, 1)">
                            <i class="fas fa-plus"></i>
                        </button>
                    </div>
                    <button class="cart-item-remove" onclick="removeFromCart(${item.id})">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
        `;
        cartBody.appendChild(cartItem);
    });
    
    cartModalTotal.textContent = `${total} грн`;
}

// Оновлення кількості товару в кошику
function updateCartItemQuantity(itemId, change) {
    const item = cart.find(i => i.id === itemId);
    if (!item) return;
    
    item.quantity += change;
    
    if (item.quantity <= 0) {
        removeFromCart(itemId);
        return;
    }
    
    saveCart();
    updateCartUI();
    renderCartItems();
}

// Видалення з кошика
function removeFromCart(itemId) {
    cart = cart.filter(item => item.id !== itemId);
    saveCart();
    updateCartUI();
    renderCartItems();
}

// Оформлення замовлення
function checkout() {
    if (cart.length === 0) {
        showNotification('Кошик порожній!', 'error');
        return;
    }
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const itemsList = cart.map(item => `${item.name} x${item.quantity}`).join('\n');
    
    alert(`Дякуємо за замовлення!\n\nВаше замовлення:\n${itemsList}\n\nЗагальна сума: ${total} грн\n\nМи зв'яжемося з вами найближчим часом для підтвердження.`);
    
    cart = [];
    saveCart();
    updateCartUI();
    closeCartModal();
}

// Оновлення UI кошика
function updateCartUI() {
    const cartCount = document.getElementById('cartCount');
    const cartTotal = document.getElementById('cartTotal');
    
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    cartCount.textContent = totalItems;
    cartTotal.textContent = `${totalPrice} грн`;
}

// Збереження кошика в localStorage
function saveCart() {
    localStorage.setItem('sushiyaroll_cart', JSON.stringify(cart));
}

// Показ нотифікації
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#4CAF50' : '#f44336'};
        color: white;
        padding: 15px 25px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        z-index: 3000;
        animation: slideIn 0.3s ease-out;
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => notification.remove(), 300);
    }, 2000);
}

// Налаштування слухачів подій
function setupEventListeners() {
    // Фільтри категорій
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            renderMenu(button.getAttribute('data-category'));
        });
    });
    
    // Модальне вікно страви
    document.getElementById('modalClose').addEventListener('click', closeDishModal);
    document.getElementById('modalOverlay').addEventListener('click', closeDishModal);
    
    // Кількість
    document.getElementById('qtyMinus').addEventListener('click', () => {
        const input = document.getElementById('qtyInput');
        if (input.value > 1) input.value = parseInt(input.value) - 1;
    });
    
    document.getElementById('qtyPlus').addEventListener('click', () => {
        const input = document.getElementById('qtyInput');
        if (input.value < 20) input.value = parseInt(input.value) + 1;
    });
    
    // Додавання в кошик
    document.getElementById('addToCartBtn').addEventListener('click', addToCart);
    
    // Модальне вікно кошика
    document.getElementById('cartBtn').addEventListener('click', openCartModal);
    document.getElementById('cartModalClose').addEventListener('click', closeCartModal);
    document.getElementById('cartModalOverlay').addEventListener('click', closeCartModal);
    
    // Оформлення замовлення
    document.getElementById('checkoutBtn').addEventListener('click', checkout);
    
    // Плавна прокрутка до меню
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Закриття модальних вікон на Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeDishModal();
            closeCartModal();
        }
    });
}

// Додаємо стилі для анімацій нотифікацій
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Експорт функцій для використання в HTML
window.updateCartItemQuantity = updateCartItemQuantity;
window.removeFromCart = removeFromCart;
