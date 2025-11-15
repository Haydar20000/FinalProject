
// Home Section Code ------------------------------------Start
/**
         * Function to set up the scroll entrance animation using Intersection Observer.
         * When an element tagged with 'scroll-animate' enters the viewport, 
         * the 'animate-in' class is added, triggering the CSS transition.
         */
const observerOptions = {
    root: null, // relative to the viewport
    rootMargin: '0px', // no margin
    threshold: 0.1 // trigger when 10% of the element is visible
};

const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // When element enters view, add the class to start the animation
            entry.target.classList.add('animate-in');
            // Stop observing once animated
            observer.unobserve(entry.target);
        }
    });
};

// Create the observer instance
const observer = new IntersectionObserver(observerCallback, observerOptions);

// Tell the observer to watch every element with the 'scroll-animate' class
document.querySelectorAll('.scroll-animate').forEach(element => {
    observer.observe(element);
});
// Home Section Code ------------------------------------end
// Work Force and Facilities section Code ------------------------------------start
// Data for the Work Force and Facilities section
const statsData = [
    {
        icon: "assets/Icon1.png",
        value: "2",
        title: "Country Offices",
        description: "Strategically located offices to manage operations and client relations across key regions."
    },
    {
        icon: "assets/Icon4.png",
        value: "47",
        title: "Trained Staff",
        description: "Employments included within the following departments: management, business support, commercial, operation and supply chain, HR, IT, Administrative, Finance, Regulatory affairs and QC."
    },
    {
        icon: "assets/Icon3.png",
        value: "800m²",
        title: "Chilled Warehouses",
        description: "Advanced storage facilities maintaining optimal temperatures for sensitive products, ensuring integrity and compliance."
    },
    {
        icon: "assets/Icon2.png",
        value: "3",
        title: "Refrigerated Trucks",
        description: "Dedicated fleet equipped to transport temperature-controlled goods, ensuring cold chain integrity from facility to destination."
    },
    {
        icon: "assets/Icon5.png",
        value: "Strong",
        title: "Financial Support",
        description: "Robust financial backing and stable resources ensure operational continuity and support strategic growth initiatives."
    },
    {
        icon: "assets/Icon6.png",
        value: "10+",
        title: "Years Experience",
        description: "Over a decade of industry expertise, navigating market complexities and delivering consistent results."
    }
];

// Function to create a single stat card HTML
function createStatCard(stat, index) {
    // Stagger delay starts after the section header animation
    const baseDelay = 0.5;
    const animationDelay = (baseDelay + (index * 0.25)) + 's';

    const randomColor = Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');

    return `
                <div 
                    class="stat-card p-8 sm:p-10 bg-white rounded-xl shadow-lg border border-gray-200 text-center flex flex-col justify-start items-center initial-hidden"
                    style="--animation-delay: ${animationDelay};"
                    data-index="${index}"
                >
                    <!-- Icon Container: Note the fallback image if assets/IconX.png is not found -->
                    <div class="rounded-lg mb-6">
                        <img 
                            src="${stat.icon}" 
                            alt="${stat.title} Icon" 
                            class="w-24 h-24 object-contain mx-auto" 
                            onerror="this.onerror=null;this.src='https://placehold.co/96x96/${randomColor}/ffffff?text=I';"
                        >
                    </div>
                    <h3 class="value text-3xl sm:text-4xl font-extrabold mb-2" style="color: var(--main-color);">
                        ${stat.value}
                    </h3>
                    <h4 class="title text-lg sm:text-xl font-semibold mb-3 text-gray-800">
                        ${stat.title}
                    </h4>
                    <p class="description text-sm sm:text-md text-gray-600">
                        ${stat.description}
                    </p>
                </div>
            `;
}


// Function to render all stat cards and set up the single Intersection Observer
function setupScrollAnimations() {
    const statsGrid = document.getElementById('stats-grid');
    if (statsGrid) {
        // 1. Populate the grid with the generated HTML
        statsGrid.innerHTML = statsData.map(createStatCard).join('');

        // 2. --- Intersection Observer Logic ---
        const observerOptions = {
            root: null, // relative to the viewport
            rootMargin: '0px',
            threshold: 0.2 // Trigger when 20% of item is visible
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Run animation when entering viewport
                    entry.target.classList.remove('initial-hidden');
                    entry.target.classList.add('fade-in-up');
                } else {
                    // Reset state when exiting viewport (Allows animation to re-run on scroll back)
                    // This ensures the animation plays every time the user scrolls back to the section
                    entry.target.classList.remove('fade-in-up');
                    entry.target.classList.add('initial-hidden');
                }
            });
        }, observerOptions);

        // 3. Apply observer to ALL elements with the 'initial-hidden' class 
        //    (This includes all Hero text elements, the Facilities header, and all Stat Cards)
        document.querySelectorAll('.initial-hidden').forEach(element => {
            observer.observe(element);
        });
    }
}
function renderAllContent() {
    // renderCompanies();
    setupScrollAnimations();
    // renderAllFlipCards();
}
// Initialize rendering and the observer when the window loads
window.onload = renderAllContent;