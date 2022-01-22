const prevButton = document.querySelector('.prev_container');
const nextButton = document.querySelector('.next_container');
const blogCards = document.querySelectorAll('.blog_card');
const mediumBlogContainer = document.querySelector('.medium_blogs_container');

const SCROLL_FACTOR = 200;

// scrolls medium blog posts to the left
prevButton.addEventListener('click', () => {
  mediumBlogContainer.scrollLeft -= SCROLL_FACTOR;
});

// scrolls medium blog posts to the right
nextButton.addEventListener('click', () => {
  mediumBlogContainer.scrollLeft += SCROLL_FACTOR;
});

// disables the prev and next button when scroll ends
mediumBlogContainer.addEventListener('scroll', () => {
  if (
    mediumBlogContainer.offsetWidth + mediumBlogContainer.scrollLeft >=
    mediumBlogContainer.scrollWidth
  ) {
    nextButton.classList.add('disabled');
  } else if (mediumBlogContainer.scrollLeft === 0) {
    prevButton.classList.add('disabled');
  } else {
    nextButton.classList.remove('disabled');
    prevButton.classList.remove('disabled');
  }
});
