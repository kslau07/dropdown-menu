// index.js
import './style.css';
import 'boxicons';

const menuButton = document.getElementById('menu-button');
const dropdown = document.getElementById('dropdown');
const arrow = document.getElementById('arrow');

const toggleDropdown = function () {
  dropdown.classList.toggle('show');
  arrow.classList.toggle('arrow-up');
};

menuButton.addEventListener('click', (event) => {
  event.stopPropagation();
  toggleDropdown();
});

// If user clicks on somewhere other than the menu, close menu
document.addEventListener('click', () => {
  if (dropdown.classList.contains('show')) toggleDropdown();
});
