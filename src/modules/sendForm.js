const sendForm = () => {

  const form1 = document.getElementById('form1');
  const form2 = document.getElementById('form2');
  const form3 = document.getElementById('form3');

  const statusMessage = document.createElement('div');
  statusMessage.style.cssText = `
      width: 100%;
      height: 30px;
      background-size: 27px;
      background-repeat: no-repeat;
      background-position: top center;
    `;

  const postData = body => fetch('./server.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  });

  const formHandler = form => {
    form.addEventListener('submit', event => {
      event.preventDefault();
      const errorElementsForm = [...form.elements].filter(item => item.classList.contains('error'));
      if (errorElementsForm.length) return;
      form.appendChild(statusMessage);
      statusMessage.style.backgroundImage = 'url(images/preloader.gif)';

      const formData = new FormData(form);
      const body = {};
      formData.forEach((val, key) => {
        body[key] = val;
      });

      postData(body)
        .then(response => {
          if (response.status !== 200) throw new Error('Status network not 200');
          statusMessage.style.backgroundImage = 'url(images/success.svg)';
          form.reset();
        })
        .catch(
          error => {
            statusMessage.style.backgroundImage = 'url(images/error.svg)';
            console.log('error: ', error);
          }
        );

    });
  };

  formHandler(form1);
  formHandler(form2);
  formHandler(form3);

};

export default sendForm;
