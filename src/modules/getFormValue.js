const select = {
  label: document.querySelector('.select__label'),
  input: document.forms.orderForm.elements.selectedType,
  menu: document.querySelector('.menu'),
  selectItems: document.querySelectorAll('.menu__item'),
  arrow: document.querySelector('.select__arrow'),
};

const range = {
  input: document.forms.orderForm.elements.rangeInput,
  display: document.querySelector('#rangeValue'),
};

// toggle menu
select.label.addEventListener('click', () => {
  if (select.menu.style.display === 'none') {
    select.menu.style.display = 'flex';
    select.label.classList.add('select__label_active');
    select.arrow.classList.add('select__arrow_active');
  } else {
    select.menu.style.display = 'none';
    select.label.classList.remove('select__label_active');
    select.arrow.classList.remove('select__arrow_active');
  }
});

// select item
select.selectItems.forEach((selectItem) => {
  selectItem.addEventListener('click', (event) => {
    event.preventDefault();
    select.input.value = selectItem.textContent;
    select.menu.style.display = 'none';
    select.label.classList.remove('select__label_active');
  });
});

// select range
range.display.textContent = range.input.value;

range.input.addEventListener('change', (event) => {
  event.preventDefault();
  range.display.textContent = event.target.value;
});
