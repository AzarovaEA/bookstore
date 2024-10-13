const btnBookmarks = document.querySelectorAll('.product-card__btn-bookmark');
btnBookmarks.forEach(btnBookmark => {
    btnBookmark.addEventListener('click', function () {
        const bookmarkIcon = btnBookmark.querySelector('.bookmark-icon');
        bookmarkIcon.src = bookmarkIcon.src.includes('img/bookmark_2.png') ? '/img/bookmark_painted.png' : '/img/bookmark_2.png';
    });
});

const filterButton = document.getElementById('aside__icon-btn-filter');
const filterForm = document.getElementById('aside__filter')

filterButton.addEventListener('click', function () {
    filterForm.classList.toggle('aside__filter');
});
