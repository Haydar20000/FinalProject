// Home Section Code ------------------------------------Start
/**
         * Function to set up the scroll entrance animation using Intersection Observer.
         * When an element tagged with 'scroll-animate' enters the viewport, 
         * the 'animate-in' class is added, triggering the CSS transition.
         */
document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        root: null, // relative to viewport
        rootMargin: '0px',
        threshold: 0.1 // 10% of the item visible
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                // Stop observing once it's animated
                observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe the main section container for the unified animation
    const targetElement = document.getElementById('home');
    if (targetElement) {
        observer.observe(targetElement);
    }
});
// Home Section Code ------------------------------------end 