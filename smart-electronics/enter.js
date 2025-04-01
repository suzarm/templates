const userIcon = document.getElementById('userIcon');
const dropdown = document.getElementById('userDropdown');


userIcon.onclick = function(event) {
    event.stopPropagation(); // Prevents event from bubbling up to window onclick
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
};

// Close the dropdown if clicked outside
window.onclick = function(event) {
    if (!event.target.matches('.user-icon') && !event.target.closest('.dropdown')) {
        dropdown.style.display = 'none';
    }
};