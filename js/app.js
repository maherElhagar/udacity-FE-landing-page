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
const sections = document.querySelectorAll("section");
const nav = document.getElementById("navbar__list");
const navFragment = document.createDocumentFragment();

/**
 * End Global Variables
 *
 */

/**
 * Begin Main Functions
 *
 */

// build the nav
buildMenu = () => {
    for (section of sections) {
        const navLinkText = section.getAttribute("data-nav");
        const navLinkAnchor = section.id;
        const navItem = document.createElement("li");
        navItem.innerHTML = `<a class="menu__link" href="#${navLinkAnchor}">${navLinkText}</a>`;
        navFragment.appendChild(navItem);
    }
    nav.appendChild(navFragment);
};

// Scroll to anchor ID using scrollIntoView method
scrollToSection = () => {
    nav.addEventListener("click", (e) => {
        if (e.target.nodeName === "A") {
            e.preventDefault();
            const target = document.querySelector(e.target.getAttribute("href"));
            target.scrollIntoView({
                behavior: "smooth",
            });
        }
    });
};

// Add class 'active' to section & its relevant menu item when near top of viewport
handleActiveState = () => {
    handleIntersection = (entries) => {
        entries.map((entry) => {
            const targetId = entry.target.id;
            const targetSection = document.querySelector(`#${targetId}`);
            const targetNavItem = document.querySelector(
                `a[href="#${targetId}"]`
            ).parentElement;
            if (entry.isIntersecting) {
                targetNavItem.classList.add("active");
                targetSection.classList.add("active");
            } else {
                targetNavItem.classList.remove("active");
                targetSection.classList.remove("active");
            }
        });
    };

    const options = {
        root: null,
        rootMargin: "160px",
        threshold: 0.9,
    };

    const observer = new IntersectionObserver(handleIntersection, options);
    sections.forEach((section) => observer.observe(section));
};
/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu
buildMenu();

// Scroll to section on link click
scrollToSection();

// Set sections as active
handleActiveState();
