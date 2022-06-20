const menuIcon = document.querySelector('.menu_icon');
const menuIcon2 = document.querySelector('.menu_icon_2');
const parent2 = document.querySelector('.mobile_parent_2');
const body = document.querySelector('body');
const navigationGovernance = document.querySelector('.navigation_governance');
const navigationGovernanceOption = document.querySelector(
  '.navigation_governance_option'
);
const navigationGovernanceList = document.querySelector(
  '.navigation_governance_list'
);
const navigationGovernanceChild = document.querySelector(
  '.navigation_governance_child'
);

const navigationGovernanceParent = document.querySelector(
  '.navigation_governance_parent'
);

const navigationGovernanceUnselect = document.querySelector(
  '.navigation_governance_unselect'
);

const mobileHeader = document.querySelector(
  '.mobile_header_navigation_container'
);

const medium_blogs_container = document.querySelector(
  '.medium_blogs_container'
);

const cookiePopupCloseBtn = document.querySelector('#close-cookie-popup');
const cookieConsentPopupDiv = document.querySelector('#cookie-consent-popup');

const arr_roadmap_items = document.querySelectorAll(
  '.custom-accordion > .quarter_item'
);

const navigationSignInButton = document.querySelectorAll('.navigation_sign_in')[1];
const mobileSignInBtn = document.querySelector('.sign-in-mobile-btn');
const navigationSignInListModal = document.querySelector('#navigation_sign_in_list_modal');
const modalCloseBtn = document.querySelector('#modal_close');

// side-menu slides from left
menuIcon.addEventListener('click', () => {
  mobileHeader.style.transform = 'translateX(0)';
  menuIcon.style.display = 'none';
  menuIcon2.style.display = 'block';
});

// side-menu slides to left
parent2.addEventListener('click', () => {
  mobileHeader.style.transform = 'translateX(-100%)';
  menuIcon.style.display = 'block';
  menuIcon2.style.display = 'none';
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

// opens governance chains
navigationGovernanceList.addEventListener('mouseover', () => {
  navigationGovernanceChild.classList.remove('no_display');
});

// closes governance chains
navigationGovernanceList.addEventListener('mouseleave', () => {
  navigationGovernanceChild.classList.add('no_display');
});

// closes cookie popup
cookiePopupCloseBtn.addEventListener('click', () => {
  cookieConsentPopupDiv.classList.add('no_display');
});

// fetch medium blog posts
const fetchMediumBlogs = async (name) => {
  const res = await fetch(
    `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/${name}`
  );
  return await res.json();
};

// truncated the length
const truncate = (str, length) => {
  if (str.length > length) {
    return str.substring(0, length) + '...';
  }
  return str;
};

//populate medium_section with blog cards
fetchMediumBlogs('@PolkAssembly').then((res) => {
  function createBlogCardElement(blogPost) {
    //create
    const cardAnchor = document.createElement('A');
    const blogCard = document.createElement('DIV'); //.blogCard
    const blogThumbnail = document.createElement('IMG'); //.blogThumbnail
    const blogContentContainer = document.createElement('DIV'); //.blogContentContainer
    const blogTitle = document.createElement('H4'); //.blogContentContainer>h4
    const blogContent = document.createElement('P'); //.blogContentContainer>p

    //structure
    cardAnchor.appendChild(blogCard);
    blogCard.appendChild(blogThumbnail);
    blogCard.appendChild(blogContentContainer);
    blogContentContainer.appendChild(blogTitle);
    blogContentContainer.appendChild(blogContent);

    //style
    blogCard.className = 'blogCard';
    blogThumbnail.className = 'blogThumbnail';
    blogContentContainer.className = 'blogContentContainer';

    //populate
    cardAnchor.setAttribute('href', blogPost.link);
    cardAnchor.setAttribute('target', '_blank');
    blogThumbnail.setAttribute('src', blogPost.thumbnail);
    blogTitle.innerHTML = truncate(blogPost.title, 40);
    // blogContent.innerHTML = blogPost.content;

    // TODO: REMOVE - TEMP FIX
    if(blogPost.title == "Building accountability for Treasury proposals") {
      blogThumbnail.setAttribute('src', './images/building_accountability_thumbnail.png');
    }

    return cardAnchor;
  }

  res.items.forEach((blogPost) => {
    const blogCard = createBlogCardElement(blogPost);
    medium_blogs_container.appendChild(blogCard);
  });
});

/*
  State for accordion
*/
var roadmapLastActiveItem = document.querySelector('#roadmap_q1'); //default is q1 panel (via html)
arr_roadmap_items.forEach((item) => {
  // remove active state class from last roadmapLastActiveItem
  //assign latest roadmapLastActiveItem
  item.addEventListener('mouseover', () => {
    roadmapLastActiveItem.classList.remove('roadmap_active');
    roadmapLastActiveItem = item;
    roadmapLastActiveItem.classList.add('roadmap_active');
  });
});


// sign in button
navigationSignInButton.addEventListener('click', () => {
  navigationSignInListModal.classList.remove('no_display');
});

modalCloseBtn.addEventListener('click', () => {
  navigationSignInListModal.classList.add('no_display');
});

mobileSignInBtn.addEventListener('click', () => {
  navigationSignInListModal.classList.remove('no_display');
});