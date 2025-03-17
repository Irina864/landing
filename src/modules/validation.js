const form = {
  form: document.forms.orderForm,
  inputs: [
    document.forms.orderForm.elements.system,
    document.forms.orderForm.elements.mail,
    document.forms.orderForm.elements.customer,
    document.forms.orderForm.elements.percent,
    document.forms.orderForm.elements.file,
  ],
  fields: [
    document.querySelector('.select__label'),
    document.forms.orderForm.elements.mail,
    document.forms.orderForm.elements.customer,
    document.forms.orderForm.elements.percent,
    document.querySelector('.button_file'),
  ],
};

form.inputs.forEach((input, index) => {
  input.addEventListener('input', () => {
    removeErrorClass(form.fields[index]);
    const errorElement = form.fields[index].nextElementSibling;
    if (errorElement && errorElement.classList.contains('error')) {
      errorElement.remove();
    }
  });
});

form.fields[0].addEventListener('click', (e) => {
  e.preventDefault();
  removeErrorClass(form.fields[0]);
  const errorElement = form.fields[0].nextElementSibling;
  if (errorElement && errorElement.classList.contains('error')) {
    errorElement.remove();
  }
});

form.form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const sendData = validateForm();
  if (sendData) {
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/posts',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(sendData),
        }
      );

      const data = await response.json();
      console.log('POST response: ', data);
      if (response.ok) {
        form.inputs.forEach((input) => {
          input.value = '';
          if (input.type === 'range') {
            input.value = '75';
            document.querySelector('#rangeValue').textContent = input.value;
          }
          if (input.type === 'file') {
            document.querySelector('.button_file').innerHTML = `  <img
            class="button__img"
            src="./img/doc.svg"
            alt="file"
          />ПРИКРЕПИТЬ ФАЙЛ`;
          }
        });
        alert('Данные отправлены на сервер');
      } else {
        throw new Error('Ошибка на сервере');
      }
    } catch (error) {
      console.log('POST response error: ', error);
    }
  }
});

function validateForm() {
  document.querySelectorAll('.error').forEach((error) => error.remove());
  let isValid = true;
  form.inputs.forEach((input, index) => {
    if (!checkValidity(input, form.fields[index])) {
      isValid = false;
    }
  });

  if (isValid) {
    const sendData = {
      system: form.form.elements.system.value,
      email: form.form.elements.mail.value,
      customer: form.form.elements.customer.value,
      percent: form.form.elements.percent.value,
      file: form.form.elements.file.files[0],
    };
    return sendData;
  }
  return false;
}

function checkValidity(input, field) {
  if (input.validity.valueMissing) {
    createNewElement('Обязательное поле', 'div', field, 'error');
    addErrorClass(field);
    return false;
  }
  if (input.name === 'system' && input.value === '') {
    createNewElement('Выберите тип системы', 'div', field, 'error');
    addErrorClass(field);
    return false;
  }
  if (input.validity.tooShort) {
    createNewElement(
      `Минимальная длина - ${input.minLength} символов`,
      'div',
      field,
      'error'
    );
    addErrorClass(field);
    return false;
  }
  if (input.validity.tooLong) {
    createNewElement(
      `Максимальная длина - ${input.maxLength} символов`,
      'div',
      field,
      'error'
    );
    addErrorClass(field);
    return false;
  }
  if (input.validity.typeMismatch && input.type === 'email') {
    createNewElement(
      'Введите корректный адрес электронной почты',
      'div',
      field,
      'error'
    );
    addErrorClass(field);
    return false;
  }
  if (input.validity.patternMismatch && input.type === 'email') {
    createNewElement('Некорректное значение в поле', 'div', field, 'error');
    addErrorClass(field);

    return false;
  }
  if (input.type === 'file' && input.files.length === 0) {
    createNewElement('Выберите файл', 'div', field, 'error');
    addErrorClass(field);

    return false;
  }
  if (input.type === 'range') {
    const min = input.min ? parseFloat(input.min) : 0;
    const max = input.max ? parseFloat(input.max) : 100;
    if (input.value < min || input.value > max) {
      createNewElement(
        `Значение должно быть от ${min} до ${max}`,
        'div',
        field,
        'error'
      );
      addErrorClass(field);

      return false;
    }
  }
  return true;
}

function createNewElement(content, tag, elem, classNew) {
  const newElem = document.createElement(tag);
  newElem.classList.add(classNew);
  newElem.innerHTML = content;
  elem.after(newElem);
}

function removeErrorClass(elem) {
  elem.classList.remove('error-border');
}
function addErrorClass(elem) {
  elem.classList.add('error-border');
}
