const menuIcon = document.querySelector('.menu_icon');
const parent2 = document.querySelector('.mobile_parent_2');
const body = document.querySelector('body');
const navigationGovernance = document.querySelector('.navigation_governance');
const navigationGovernanceParent = document.querySelector(
  '.navigation_governance_parent'
);

const navigationGovernanceUnselect = document.querySelector(
  '.navigation_governance_unselect'
);

const mobileHeader = document.querySelector(
  '.mobile_header_navigation_container'
);

// side-menu slides from left
menuIcon.addEventListener('click', () => {
  mobileHeader.style.transform = 'translateX(0)';
});

// side-menu slides to left
parent2.addEventListener('click', () => {
  mobileHeader.style.transform = 'translateX(-100%)';
});

// list opens on governance click
navigationGovernanceUnselect.addEventListener('click', () => {
  navigationGovernance.classList.remove('no_display');
  navigationGovernanceUnselect.classList.add('no_display');
});

// list closes on governance click
navigationGovernanceParent.addEventListener('click', () => {
  navigationGovernance.classList.add('no_display');
  navigationGovernanceUnselect.classList.remove('no_display');
});
