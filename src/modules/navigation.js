import { removeClass } from './helpers';

const navItems = document.querySelectorAll('.nav__link');

// select a navigation item
navItems.forEach((navElem) => {
  navElem.addEventListener('click', (event) => {
    event.preventDefault();
    navItems.forEach((item) => removeClass('nav_active', item));
    navElem.classList.add('nav_active');
  });
});
