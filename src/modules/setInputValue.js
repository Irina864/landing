const select = {
  label: document.querySelector('.select__label'),
  input: document.forms.orderForm.elements.system,
  menu: document.querySelector('.menu'),
  selectItems: document.querySelectorAll('.menu__item'),
  arrow: document.querySelector('.select__arrow'),
};

const range = {
  input: document.forms.orderForm.elements.percent,
  display: document.querySelector('#rangeValue'),
};

const file = {
  input: document.forms.orderForm.elements.file,
  label: document.querySelector('.button_file'),
};

// toggle menu
select.menu.style.display = 'none';
select.label.addEventListener('click', (e) => {
  e.preventDefault();
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

// add file
file.input.addEventListener('change', (e) => {
  const files = e.target.files;

  if (files.length > 0) {
    const selectedFile = files[0];
    file.label.innerHTML = ` <img
                      class="button__img"
                      src="./img/doc.svg"
                      alt="file"
                    />Файл прикреплен`;

    if (selectedFile.size > 10 * 1024 * 1024) {
      alert('Размер файла не должен превышать 10 Мб');
      file.input.value = '';
      file.label.innerHTML = ` <img
                      class="button__img"
                      src="./img/doc.svg"
                      alt="file"
                    /> ПРИКРЕПИТЬ ФАЙЛ`;
      return;
    }
  } else {
    file.label.innerHTML = `  <img
                      class="button__img"
                      src="./img/doc.svg"
                      alt="file"
                    />ПРИКРЕПИТЬ ФАЙЛ`;
  }
});
