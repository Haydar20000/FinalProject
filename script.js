
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

// OUR STORY (Vision, Mission, Values) ------------------------------------start
const aboutCards = [

    {
        title: "Mission",
        icon: `
        <svg width="150px" height="150px" viewBox="0 0 1024 1024" class="icon"  version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M304 592h416l104 296h-624L304 592z m328 128c12.8 0 24-11.2 24-24s-11.2-24-24-24-24 11.2-24 24 11.2 24 24 24z m-256-48c12.8 0 24-11.2 24-24s-11.2-24-24-24-24 11.2-24 24 11.2 24 24 24z m136 112c9.6 0 16-6.4 16-16s-6.4-16-16-16-16 6.4-16 16 6.4 16 16 16z m8-256c-12.8 0-24-11.2-24-24s11.2-24 24-24 24 11.2 24 24-11.2 24-24 24z m104 48c-9.6 0-16-6.4-16-16s6.4-16 16-16 16 6.4 16 16-6.4 16-16 16z" fill="#26556e" /><path d="M622.4 112H401.6c9.6 76.8 14.4 142.4 14.4 176 0 35.2-65.6 248-200 592h593.6C673.6 536 608 323.2 608 288c0-33.6 4.8-99.2 14.4-176z m32 0c-9.6 78.4-14.4 144-14.4 176 0 28.8 67.2 248 198.4 580.8 1.6 3.2 1.6 8 1.6 11.2 0 17.6-14.4 32-32 32H214.4c-4.8 0-8 0-11.2-1.6-16-6.4-24-25.6-17.6-41.6C316.8 536 384 316.8 384 288c0-32-4.8-97.6-14.4-176H368c-9.6 0-16-6.4-16-16s6.4-16 16-16h288c9.6 0 16 6.4 16 16s-6.4 16-17.6 16c1.6 0 0 0 0 0z" fill="#08135B" /><path d="M424 480h48c4.8 0 8 3.2 8 8s-3.2 8-8 8H432v48h24c4.8 0 8 3.2 8 8s-3.2 8-8 8H432v48h40c4.8 0 8 3.2 8 8s-3.2 8-8 8H432v48h24c4.8 0 8 3.2 8 8s-3.2 8-8 8H432v48h40c4.8 0 8 3.2 8 8s-3.2 8-8 8H416V480h8z" fill="#08135B" /></svg>
        `,
        frontText: "By providing the high-quality healthcare products for patients with affordable prices, ",
        backText: "elegant services for the customers and fulfilling perfect working environment for our teams.",
        backColor: "#26556e" // Dark Accent Green/Teal
    },
    {
        title: "Vision",
        icon: `<svg width="150px" height="150px" viewBox="0 0 1024 1024" class="icon"  version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M500.8 766.4c8 4.8 11.2 14.4 6.4 22.4s-14.4 11.2-22.4 6.4l-176-96c-8-4.8-11.2-14.4-6.4-22.4 4.8-8 14.4-11.2 22.4-6.4l176 96z" fill="#050D42" /><path d="M652.8 460.8v-32c57.6 0 86.4 89.6 64 188.8-22.4 96-134.4 179.2-224 179.2v-32c75.2 0 174.4-73.6 192-155.2 19.2-81.6-3.2-148.8-32-148.8zM316.8 908.8h352c9.6 0 16 6.4 16 16s-6.4 16-16 16h-352c-9.6 0-16-6.4-16-16s6.4-16 16-16z" fill="#050D42" /><path d="M652.8 94.4c46.4 27.2 62.4 84.8 35.2 131.2L528 502.4l-166.4-96 160-276.8c25.6-46.4 84.8-60.8 131.2-35.2z" fill="#008791" /><path d="M336 428.8c-9.6-6.4-14.4-17.6-11.2-24s16-9.6 27.2-3.2l184 107.2c9.6 6.4 14.4 17.6 11.2 24-4.8 8-16 9.6-27.2 3.2L336 428.8z" fill="#050D42" /><path d="M358.4 443.2l139.2 80-24 41.6c-4.8 8-14.4 9.6-22.4 6.4l-110.4-64c-8-4.8-9.6-14.4-6.4-22.4l24-41.6z" fill="#008791" /><path d="M652.8 444.8m-48 0a48 48 0 1 0 96 0 48 48 0 1 0-96 0Z" fill="#008791" /><path d="M476.8 828.8v96h32v-96z" fill="#050D42" /><path d="M492.8 780.8m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z" fill="#008791" /></svg>`, // Emoji
        frontText: "Our vision is to be in the forefront among all the distributors in Iraq being recognized through our highly qualified products",
        backText: " variety of services and promotional and sales teams that reach the most distant of Iraq's provinces, areas and districts.",
        backColor: "#008791" // Primary Teal
    },
    {
        title: "Values",
        // NEW: Replaced emoji with an Inline SVG for a clean, scalable icon.
        icon: `
                    <svg width="150px" height="150px" viewBox="0 0 1024 1024" class="icon"  version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M832 384l8 1.6-1.6 8 1.6 3.2-4.8 3.2-44.8 161.6-16-4.8 40-147.2-260.8 144-158.4 284.8-11.2-6.4-6.4 6.4-176-176 11.2-11.2 163.2 163.2 147.2-265.6-294.4-297.6 11.2-11.2v-8h9.6l3.2-3.2 3.2 3.2L664 208l1.6 16-395.2 22.4 278.4 278.4 276.8-153.6 6.4 12.8z" fill="#050D42" /><path d="M896 384c0 35.2-28.8 64-64 64s-64-28.8-64-64 28.8-64 64-64 64 28.8 64 64z m-656-32c-62.4 0-112-49.6-112-112s49.6-112 112-112 112 49.6 112 112-49.6 112-112 112z m304 336c-80 0-144-64-144-144s64-144 144-144 144 64 144 144-64 144-144 144z m-224 144c0-35.2 28.8-64 64-64s64 28.8 64 64-28.8 64-64 64-64-28.8-64-64z m-144-176c0-17.6 14.4-32 32-32s32 14.4 32 32-14.4 32-32 32-32-14.4-32-32z m448-440c0-22.4 17.6-40 40-40s40 17.6 40 40-17.6 40-40 40-40-17.6-40-40zM736 560c0-27.2 20.8-48 48-48s48 20.8 48 48-20.8 48-48 48-48-20.8-48-48z" fill="#32857e" /></svg>
                `,
        frontText: "Integrity as the basis for any successful business Focus on consumer is a fundamental ingredient for our success ",
        backText: "Developing the team is essential to sustain our growth High performance is what we strive for permanentlyQuality in our product and Excellence in our processes Commitment to diversity and the acceptance of differences",
        backColor: "#32857e" // Slightly lighter teal accent
    },
];

// code for  OUR STORY (Vision, Mission, Values) ------------------------------------start

// --- FLIP CARD FUNCTION (UPDATED) ---
function createFlipCard(cardData, index) {
    const animationDelay = (index * 0.2) + 's';

    return `
                <div 
                    class="flip-card-container h-[400px] initial-hidden" 
                    style="--animation-delay: ${animationDelay};"
                >
                    <div class="flip-card-inner">
                        <!-- Card Front -->
                        <div class="flip-card-front">
                            <span class="text-xl mb-4">${cardData.icon}</span>
                            <h3 class="text-3xl font-extrabold mb-3 card-title">${cardData.title}</h3>
                            <p class="text-xl font-medium text-center text-gray-700">${cardData.frontText}</p>
                            <p class="mt-4 text-xl font-semibold text-main-color">Hover to Read More &rarr;</p>
                        </div>
                        
                        <!-- Card Back: Background and border color set via inline style -->
                        <div 
                            class="flip-card-back" 
                            style="background-color: ${cardData.backColor}; border: 1px solid ${cardData.backColor};"
                        >
                            <h3 class="text-3xl font-extrabold card-title">${cardData.title}</h3>
                            <p class="text-xl font-medium text-center">${cardData.backText}</p>
                            <p class="mt-6 text-xl  italic opacity-80">Flip back to summarize.</p>
                        </div>
                    </div>
                </div>
            `;
}

/**
 * Function to render all content and set up the Intersection Observer.
 */
function renderAllFlipCards() {

    // 1. Render About Cards
    const aboutGrid = document.getElementById('about-grid');
    if (aboutGrid) {
        aboutGrid.innerHTML = aboutCards.map((card, index) => createFlipCard(card, index)).join('');
    }

    // --- Intersection Observer Logic (remains the same) ---

    // Collect only the remaining flip cards for observation
    const allCards = aboutGrid ? Array.from(aboutGrid.querySelectorAll('.flip-card-container')) : [];

    const observerOptions = {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.2 // Trigger when 20% of the card is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            const card = entry.target;

            if (entry.isIntersecting) {
                // Card is visible or coming into view: Start animation
                card.classList.remove('initial-hidden');
                card.classList.add('is-visible');
            } else if (card.classList.contains('is-visible')) {
                // Card is completely out of view: Reset state to allow animation to run again
                card.classList.remove('is-visible');
                card.classList.add('initial-hidden');
            }
        });
    }, observerOptions);

    // Start observing all cards
    allCards.forEach(card => observer.observe(card));
}
// OUR STORY (Vision, Mission, Values) ------------------------------------end

function renderAllContent() {
    // renderCompanies();
    setupScrollAnimations();
    renderAllFlipCards();
}
// Initialize rendering and the observer when the window loads
window.onload = renderAllContent;