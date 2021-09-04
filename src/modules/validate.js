import Validator from './validator';

const validate = () => {
  const numberFields = document.querySelectorAll('.calc-block > input'),
    names = document.querySelectorAll('.form-name'),
    message = document.querySelector('.mess'),
    emails = document.querySelectorAll('.form-email'),
    phones = document.querySelectorAll('.form-phone');

  const inputs = [];
  inputs.push(message);

  const validateInput = (field, symbols) => {
    field.addEventListener('input', () => {
      field.value = field.value.replace(symbols, '');
    });
  };

  const validateBlur = (field => {
    field.addEventListener('blur', () => {
      field.value = field.value.replace(/( |-)\1{1,}/g, "$1");
      field.value = field.value.replace(/^( |-)/, '');
      field.value = field.value.replace(/( |-)$/, '');
      const event = new Event('input');
      field.dispatchEvent(event);
    });
  });

  numberFields.forEach(field => {
    inputs.push(field);
    validateInput(field, /\D/g);
  });

  emails.forEach(email => {
    inputs.push(email);
    validateInput(email, /[^A-Za-z0-9@-_.!~*']/g);
  });

  phones.forEach(phone => {
    inputs.push(phone);
    validateInput(phone, /[^0-9-()+]/g);
  });

  names.forEach(name => {
    inputs.push(name);
    name.value = name.value.toLowerCase();
    name.addEventListener('blur', () => {
      name.value = name.value.replace(/^.{0,1}$/g, '');
      name.value = name.value.toLowerCase();
      name.value = name.value.replace(/(^|\s)\S/g, a => a.toUpperCase());
    });
  });

  validateInput(message, /[^А-Яа-я -0-9!?,.]/g);

  inputs.forEach(input => {
    validateBlur(input);
  });
};

const valid1 = new Validator({
  selector: "#form1",
  pattern: {},
  method: {
    "form1-name": [["notEmpty"], ["pattern", "name"]],
    "form1-phone": [["notEmpty"], ["pattern", "phone"]],
    "form1-email": [["notEmpty"], ["pattern", "email"]],
  },
});
valid1.init();

const valid2 = new Validator({
  selector: "#form2",
  pattern: {},
  method: {
    "form2-name": [["notEmpty"], ["pattern", "name"]],
    "form2-phone": [["notEmpty"], ["pattern", "phone"]],
    "form2-email": [["notEmpty"], ["pattern", "email"]],
    "form2-message": [["notEmpty"], ["pattern", "message"]],
  },
});
valid2.init();

const valid3 = new Validator({
  selector: "#form3",
  pattern: {},
  method: {
    "form3-name": [["notEmpty"], ["pattern", "name"]],
    "form3-phone": [["notEmpty"], ["pattern", "phone"]],
    "form3-email": [["notEmpty"], ["pattern", "email"]],
  },
});
valid3.init();

export default validate;
