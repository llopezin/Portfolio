/**
 * Import dependencies from node_modules
 * see commented examples below
 */
import "scroll-behavior-polyfill";

/**
 * Write any other JavaScript below
 */

// Observe intersection of animated items
const addIntersectedClass = () => {
    const animatedItems = document.querySelectorAll(".animate");
    const intersectionConfig = {
        threshold: 0.6,
    };

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("intersected");
                }
            });
        },
        intersectionConfig
    );

    animatedItems.forEach((item) => {
        observer.observe(item);
    });
}


//Utils

//Poll for the existence of an HTML element 
function pollForElement(selector, callback, interval = 100, timeout = 10000) {
    const startTime = Date.now(); 

    function check() {
        const element = document.querySelector(selector)    ; 
        const elapsedTime = Date.now() - startTime; 

        if (element) {
            callback(element); 
        } else if (elapsedTime < timeout) { 
            setTimeout(check, interval); 
        } else {
            callback(null); 
        }
    }

    check(); 
}


//Initialize
pollForElement('.animate', addIntersectedClass);
