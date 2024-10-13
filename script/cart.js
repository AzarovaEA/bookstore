const cartEmpty = document.querySelector('.cart-empty');

if (!document.querySelector('.cart-content')) {
    if (cartEmpty) {
        cartEmpty.classList.remove('display-none');
    }
}

const removeAllButton = document.querySelector('.cart-item__remove-all');
removeAllButton.addEventListener('click', function () {
    const cartContent = removeAllButton.closest('.cart-content');

    if (cartContent) {
        cartContent.remove();
        if (cartEmpty) {
            cartEmpty.classList.remove('display-none');
        }
    }
});

const removeButton = document.querySelectorAll('.cart-item__remove-btn');

removeButton.forEach(button => {
    button.addEventListener('click', function () {
        const productCard = button.closest('.cart-content .cart-item');
        if (productCard) {
            productCard.remove();
            const cartContent = removeAllButton.closest('.cart-content');
            if (cartContent) {
                const remainingCartItems = cartContent.querySelectorAll('.cart-item');
                if (remainingCartItems.length === 0) {
                    cartContent.remove();
                    if (cartEmpty) {
                        cartEmpty.classList.remove('display-none');
                    }
                }
            }
        }
    })
});