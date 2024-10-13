const btnBookmark = document.querySelector('.description__btn-bookmark');

btnBookmark.addEventListener('click', function () {
    const bookmarkIcon = btnBookmark.querySelector('.bookmark-icon');
    if (bookmarkIcon.src.includes('img/bookmark_2.png')) {
        bookmarkIcon.src = '/img/bookmark_painted.png';
    } else {
        bookmarkIcon.src = '/img/bookmark_2.png';
    }
});