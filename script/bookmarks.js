const removeButton = document.querySelectorAll('.bookmark__remove-btn');

removeButton.forEach(button => {
    button.addEventListener('click', function () {
        const productCard = button.closest('.bookmarks .product-card');
        if (productCard) {
            productCard.remove();
        }
    })
})