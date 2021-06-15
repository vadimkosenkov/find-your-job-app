'use strict';

const menuButton = document.querySelector('.menu-button');
const menu = document.querySelector('.navbar');
const closeMenuButton = document.querySelector('.close-button');

const toggleMenu = () => {
  menu.classList.toggle('is-open');
};

menuButton.addEventListener('click', (event) => {
  event.preventDefault();
  toggleMenu();
});
closeMenuButton.addEventListener('click', (event) => {
  event.preventDefault();
  toggleMenu();
});
