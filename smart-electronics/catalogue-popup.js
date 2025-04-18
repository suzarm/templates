const cataloguePopup = document.getElementById('catalogue-popup');
const catalogueLoginBtn = document.getElementById('catalogue-login');
const closeCatalogueBtn = document.getElementById('close-catalogue-popup');

catalogueLoginBtn.onclick = function() {
    cataloguePopup.style.display = 'flex';
}


closeCatalogueBtn.onclick = function() {
    cataloguePopup.style.display = 'none';
}

