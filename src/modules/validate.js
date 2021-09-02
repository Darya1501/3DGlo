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
      field.value = field.value.replace(/^.{0,1}$/g, '');
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
    validateInput(name, /[^А-Яа-я -]/g);
  });

  validateInput(message, /[^А-Яа-я -0-9!?,.]/g);

  inputs.forEach(input => {
    validateBlur(input);
  });
};

export default validate;
