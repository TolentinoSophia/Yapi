document.addEventListener("DOMContentLoaded", function() {
    // Get all navigation links
    const navLinks = document.querySelectorAll('.nav-link');

    // Function to remove active class from all links
    function removeActiveClasses() {
        navLinks.forEach(link => {
            link.classList.remove('active');
        });
    }

    // Function to set the active class based on the current URL path
    function setActiveLinkOnLoad() {
        const currentPath = window.location.pathname.split("/").pop();
        navLinks.forEach(link => {
            if (link.getAttribute('href') === currentPath) {
                link.classList.add('active');
            }
        });
    }

    // Function to add active class based on scroll position
    function setActiveLinkOnScroll() {
        const scrollPosition = window.scrollY;

        navLinks.forEach(link => {
            const section = document.querySelector(link.getAttribute('href'));
            if (section && section.offsetTop <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition) {
                removeActiveClasses();
                link.classList.add('active');
            }
        });
    }

    // Set active link on scroll
    window.addEventListener('scroll', setActiveLinkOnScroll);

    // Set active link on page load
    setActiveLinkOnLoad();
});