const togglePopup = () => {
  const popup = document.querySelector('.popup'),
    popupBtn = document.querySelectorAll('.popup-btn'),
    popupContent = popup.querySelector('.popup-content');

  popupBtn.forEach(elem => { // открытие модального окна
    elem.addEventListener('click', () => {
      popup.style.display = 'block';

      let reqID = 0;
      const animate = () => {
        if (popupContent.style.opacity < 1) {
          popupContent.style.opacity = 0.05 + parseFloat(popupContent.style.opacity);
          popupContent.style.top = -1 + parseFloat(popupContent.style.top) + '%';
        } else {
          cancelAnimationFrame(reqID);
          return;
        }
        reqID = requestAnimationFrame(animate);
      };
      if (document.documentElement.clientWidth > 768) {
        popupContent.style.opacity = 0;
        popupContent.style.top = 30 + '%';
        animate();
      }
    });
  });

  popup.addEventListener('click', event => { // Закрытие модального окна
    let target = event.target;
    if (target.classList.contains('popup-close')) {
      popup.style.display = 'none';
    } else {
      target = target.closest('.popup-content');
      if (!target) {
        popup.style.display = 'none';
      }
    }
  });
};

export default togglePopup;
