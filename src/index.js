// index.js
import './style.css';

const dropdownBtn = document.getElementById('btn');
const dropdownMenu = document.getElementById('dropdown');
const toggleArrow = document.getElementById('arrow');

const toggleDropdown = function () {
  dropdownMenu.classList.toggle('show');
  toggleArrow.classList.toggle('arrow');
};

dropdownBtn.addEventListener('click', (e) => {
  // Below, prevents the function of the button element from being passed down to the parent element.
  // Stops the function from running twice.
  // If we remove .stopPropagation(), our menu stops working
  // because of the e/l we added to 'document' below
  e.stopPropagation();
  toggleDropdown();
});

document.documentElement.addEventListener('click', () => {
  if (dropdownMenu.classList.contains('show')) {
    toggleDropdown();
  }
});
