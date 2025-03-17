const navItems = document.querySelectorAll('.nav__link');
const burger = {
  menu: document.querySelector('.burger'),
  lines: document.querySelectorAll('.burger__line'),
  list: document.querySelector('.nav__list'),
};

// select a navigation item
navItems.forEach((navElem) => {
  navElem.addEventListener('click', () => {
    navItems.forEach((item) => item.classList.remove('nav__link_active'));
    navElem.classList.add('nav__link_active');
    if (burger.lines[0].classList.contains('burger__line_active')) {
      burger.list.classList.remove('nav__list_active');
      burger.lines.forEach((item) =>
        item.classList.remove('burger__line_active')
      );
    }
  });
});

//toggle burger-menu
burger.menu.addEventListener('click', (e) => {
  e.preventDefault();
  burger.lines.forEach((line) => {
    line.classList.toggle('burger__line_active');
    burger.list.classList.toggle('nav__list_active');
  });
  burger.lines[0].classList.contains('burger__line_active')
    ? burger.list.classList.add('nav__list_active')
    : burger.list.classList.remove('nav__list_active');
});
