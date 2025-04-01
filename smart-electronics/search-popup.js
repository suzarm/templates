const searchPopup = document.getElementById('search-popup');
const searchLoginBtn = document.getElementById('search-login');
const closeSearchBtn = document.getElementById('close-search-popup');


searchLoginBtn.onclick = function() {
    searchPopup.style.display = 'flex';
}


closeSearchBtn.onclick = function() {
    searchPopup.style.display = 'none';
}