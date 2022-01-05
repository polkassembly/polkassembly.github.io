// array of navbar links
const headerNavigationContainer = document.querySelectorAll('.header_navigation_container a');
const mobileNavigationLinks = document.querySelectorAll('.mobile_navigation_links>a');

// elements to be scrolled to
const possibleValues = ['about', 'governance', 'contact'];

// pass array of links to function, function will add click event listner scroll to element
function implementSmoothScroll(parentArray) {
    for (let i=0; i<parentArray.length; i+=1) {
        parentArray[i].addEventListener('click', function (e) {
            const targetSectionId = this.textContent?.trim()?.toLowerCase();
            if(possibleValues.includes(targetSectionId)) {
                e.preventDefault();
                const targetPosition = document.getElementById(targetSectionId).offsetTop;
                window.scroll({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            } 
        });
    }
}

// call implementSmoothScroll function with above navbar links
implementSmoothScroll(headerNavigationContainer);
implementSmoothScroll(mobileNavigationLinks);
