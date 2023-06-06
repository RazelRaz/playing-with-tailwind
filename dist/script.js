// Get the elements
const hamMenu = document.querySelector('.ham_menu');
const hideBox = document.querySelector('.hide_box');
const closeMenu = document.querySelector('.close_small_menu');

// Add event listener to the ham_menu
hamMenu.addEventListener('click', () => {
  // Toggle the 'open' class on hide_box
  hideBox.classList.toggle('open');
});

// Add event listener to the close_small_menu
closeMenu.addEventListener('click', () => {
  // Remove the 'open' class from hide_box
  hideBox.classList.remove('open');
});