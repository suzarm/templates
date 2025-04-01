const popup = document.getElementById('popup');
const loginBtn = document.getElementById('login-btn');
const closeBtn = document.getElementById('close-btn');

const loginPopup = document.getElementById('login-popup');
const openLoginPopup = document.getElementById('open-login-popup');
const closeLoginPopup = document.getElementById('close-login-popup');
const eyeIcon = document.getElementById('eye-icon');
const passwordInput = document.querySelector('.pass');

loginBtn.onclick = function() {
    popup.style.display = 'flex';
}

closeBtn.onclick = function() {
    popup.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target === popup) {
        popup.style.display = 'none';
    }
}

openLoginPopup.onclick = function(event) {
    event.preventDefault(); 
    if (popup.style.display === 'flex') {
        popup.style.display = 'none';
    }
    loginPopup.style.display = 'flex';
}


closeLoginPopup.onclick = function() {
    loginPopup.style.display = 'none';
}


eyeIcon.onclick = function() {
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text'; 
        eyeIcon.innerHTML = '<i class="fa fa-eye"></i>'; 
    } else {
        passwordInput.type = 'password'; 
        eyeIcon.innerHTML = '<i class="fa fa-eye-slash"></i>'; 
    }
}

window.onclick = function(event) {
    if (event.target === loginPopup) {
        loginPopup.style.display = 'none'; 
    }
}
