const morePopup = document.getElementById('more-popup');
const moreLoginBtn = document.getElementById('more-login');
const closeMoreBtn = document.getElementById('close-more-popup');

moreLoginBtn.onclick = function() {
    morePopup.style.display = 'flex';
}


closeMoreBtn.onclick = function() {
   morePopup.style.display = 'none';
}

