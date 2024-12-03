const mainElements = document.querySelectorAll('.main');

mainElements.forEach(main => {
    const boldElements = main.querySelectorAll('.bold');
    const italicElements = main.querySelectorAll('.italic','.iitalic');
    const mergeElements = main.querySelectorAll('.merge');
    const outlineElements = main.querySelectorAll('.outline');

    // Add hover listeners to each .main
    main.addEventListener('mouseover', () => {
        boldElements.forEach(bold => bold.classList.add('active'));
        italicElements.forEach(italic => italic.classList.add('active'));
        mergeElements.forEach(merge => merge.classList.add('active'));
        outlineElements.forEach(outline => outline.classList.add('active'));
    });

    main.addEventListener('mouseleave', () => {
        setTimeout(() => {
            boldElements.forEach(bold => bold.classList.remove('active'));
            italicElements.forEach(italic => italic.classList.remove('active'));
            mergeElements.forEach(merge => merge.classList.remove('active'));
            outlineElements.forEach(outline => outline.classList.remove('active'));
        }, 1000); // 1-second delay before removing effects
    });
});

// Select all main elements
const ttElements = document.querySelectorAll('.tt');

ttElements.forEach(tt => {
    const outlineElements = tt.querySelectorAll('.outline');
    const italicElements = tt.querySelectorAll('.iitalic');
    const mergeElements = tt.querySelectorAll('.merge');

    // Add hover listeners to each element
    outlineElements.forEach(outline => {
        outline.addEventListener('mouseover', () => {
            outline.classList.add('active');
        });
        outline.addEventListener('mouseleave', () => {
            setTimeout(() => {
                outline.classList.remove('active');
            }, 3000); // Keep the effect for 2 more seconds after mouse leaves
        });
    });

    italicElements.forEach(italic => {
        italic.addEventListener('mouseover', () => {
            italic.classList.add('active');
        });
        italic.addEventListener('mouseleave', () => {
            setTimeout(() => {
                italic.classList.remove('active');
            }, 3000); // Keep the effect for 2 more seconds after mouse leaves
        });
    });

    mergeElements.forEach(merge => {
        merge.addEventListener('mouseover', () => {
            merge.classList.add('active');
        });
        merge.addEventListener('mouseleave', () => {
            setTimeout(() => {
                merge.classList.remove('active');
            }, 3000); // Keep the effect for 2 more seconds after mouse leaves
        });
    });
});



let scrollTimeout;
let lastScrollPosition = 0;
let scrollSpeed = 0;

window.addEventListener('scroll', () => {
    const currentScrollPosition = window.scrollY;

    // Calculate scroll speed
    scrollSpeed = Math.abs(currentScrollPosition - lastScrollPosition);
    lastScrollPosition = currentScrollPosition;

    const html = document.documentElement;
    const body = document.body;

    // Condense the page if scrolling fast
    if (scrollSpeed > 40) {
        html.classList.add('condensed');
        body.classList.add('condensed');
    } else {
        html.classList.remove('condensed');
        body.classList.remove('condensed');
    }

    // Reset when scroll stops (after 100ms of no scrolling)
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
        html.classList.remove('condensed');
        body.classList.remove('condensed');
    }, 500); // 100ms delay before resetting
});


