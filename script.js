const menuIcon = document.querySelector(".menu_icon");
const menuIcon2 = document.querySelector(".menu_icon_2");
const parent2 = document.querySelector(".mobile_parent_2");
const body = document.querySelector("body");
const navigationGovernance = document.querySelector(".navigation_governance");
const navigationGovernanceParent = document.querySelector(
  ".navigation_governance_parent"
);

const navigationGovernanceUnselect = document.querySelector(
  ".navigation_governance_unselect"
);

const mobileHeader = document.querySelector(
  ".mobile_header_navigation_container"
);

const medium_blogs_container = document.querySelector(
  ".medium_blogs_container"
);

const cookiePopupCloseBtn = document.querySelector("#close-cookie-popup");
const cookieConsentPopupDiv = document.querySelector("#cookie-consent-popup");

// side-menu slides from left
menuIcon.addEventListener("click", () => {
  mobileHeader.style.transform = "translateX(0)";
  menuIcon.style.display = "none";
  menuIcon2.style.display = "block";
});

// side-menu slides to left
parent2.addEventListener("click", () => {
  mobileHeader.style.transform = "translateX(-100%)";
  menuIcon.style.display = "block";
  menuIcon2.style.display = "none";
});

// list opens on governance click
navigationGovernanceUnselect.addEventListener("click", () => {
  navigationGovernance.classList.remove("no_display");
  navigationGovernanceUnselect.classList.add("no_display");
});

// list closes on governance click
navigationGovernanceParent.addEventListener("click", () => {
  navigationGovernance.classList.add("no_display");
  navigationGovernanceUnselect.classList.remove("no_display");
});

// closes cookie popup
cookiePopupCloseBtn.addEventListener("click", () => {
  cookieConsentPopupDiv.classList.add("no_display");
});

// fetch medium blog posts
const fetchMediumBlogs = async (name) => {
  const res = await fetch(
    `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/${name}`
  );
  return await res.json();
};

//populate medium_section with blog cards
fetchMediumBlogs("@PolkAssembly").then((res) => {
  function createBlogCardElement(blogPost) {
    //create
    const cardAnchor = document.createElement("A");
    const blogCard = document.createElement("DIV"); //.blogCard
    const blogThumbnail = document.createElement("IMG"); //.blogThumbnail
    const blogContentContainer = document.createElement("DIV"); //.blogContentContainer
    const blogTitle = document.createElement("H4"); //.blogContentContainer>h4
    const blogContent = document.createElement("P"); //.blogContentContainer>p

    //structure
    cardAnchor.appendChild(blogCard);
    blogCard.appendChild(blogThumbnail);
    blogCard.appendChild(blogContentContainer);
    blogContentContainer.appendChild(blogTitle);
    blogContentContainer.appendChild(blogContent);

    //style
    blogCard.className = "blogCard";
    blogThumbnail.className = "blogThumbnail";
    blogContentContainer.className = "blogContentContainer";

    //populate
    cardAnchor.setAttribute("href", blogPost.link);
    cardAnchor.setAttribute("target", "_blank");
    blogThumbnail.setAttribute("src", blogPost.thumbnail);
    blogTitle.innerText = blogPost.title;
    // blogContent.innerHTML = blogPost.content;

    return cardAnchor;
  }

  res.items.forEach((blogPost) => {
    const blogCard = createBlogCardElement(blogPost);
    medium_blogs_container.appendChild(blogCard);
  });
});
