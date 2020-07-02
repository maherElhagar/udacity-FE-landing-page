/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
let sections = document.querySelectorAll('section');
let nav = document.getElementById('navbar__list');
const navFragment = document.createDocumentFragment();

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
for(section of sections) {
    const navLinkText = section.getAttribute('data-nav');
    const navLinkAnchor = section.getAttribute('id');
    const navItem = document.createElement('li');
    navItem.innerHTML = `<a href="#${navLinkAnchor}">${navLinkText}</a>`;
    navFragment.appendChild(navItem);
}
nav.appendChild(navFragment);


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active

