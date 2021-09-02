const toggleMenu = () => {

  const menu = document.querySelector('menu');
  const hendlerMenu = () => {
    menu.classList.toggle('active-menu');
  };

  document.addEventListener('click', event => {
    const target = event.target;
    if (target.closest('.menu')) {
      hendlerMenu();
    } else if (target.tagName === 'A' && target.closest('menu')) {
      hendlerMenu();
    } else if (menu.classList.contains('active-menu') && !target.closest('menu')) {
      hendlerMenu();
    }
    return;
  });
};

export default toggleMenu;
