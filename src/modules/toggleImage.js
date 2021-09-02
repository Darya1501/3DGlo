const toggleImage = () => {
  const imageBlock = document.querySelector('.command .row');

  const toggleSrc = item => {
    const oldSrc = item.getAttribute('src');
    const newSrc = item.dataset.img;

    item.setAttribute('src', newSrc);
    item.dataset.img = oldSrc;
  };

  imageBlock.addEventListener('mouseover', event => {
    const target = event.target;
    toggleSrc(target);
  });
  imageBlock.addEventListener('mouseout', event => {
    const target = event.target;
    toggleSrc(target);
  });
};

export default toggleImage;
