const menuIcon = document.querySelector('.menu_icon');
const parent2 = document.querySelector('.mobile_parent_2');
const body = document.querySelector('body');
const mobileHeader = document.querySelector(
  '.mobile_header_navigation_container'
);

menuIcon.addEventListener('click', () => {
  mobileHeader.style.transform = 'translateX(0)';
});

parent2.addEventListener('click', () => {
  mobileHeader.style.transform = 'translateX(-100%)';
});
