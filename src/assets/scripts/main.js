/**
 * Import dependencies from node_modules
 * see commented examples below
 */
import "scroll-behavior-polyfill";


// Observe intersection of animated items
const addIntersectedClass = () => {
    const animatedItems = document.querySelectorAll(".animate");
    const intersectionConfig = {
        threshold: 0.3,
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


// Animate background color on section change
// let initialDistanceToTop = 0;

function onScroll(target, initialDistanceToTop, reverse) {
    const background = document.querySelector(".background");
    const targetDistanceToTop = target.getBoundingClientRect().top;
    const distanceRatio = targetDistanceToTop / initialDistanceToTop;

    reverse
        ? background.style.opacity = distanceRatio
        : background.style.opacity = 1 - distanceRatio;

    if(targetDistanceToTop <= 0) window.onscroll = null
}

function changeBackgroundColor() {
    const sections = document.querySelectorAll("section, header");
    const header = document.querySelector("header");
    const background = document.querySelector(".background");

    const intersectionConfig = {
        threshold: 0.1,
    };

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(({isIntersecting, target}) => {
                const initialDistanceToTop = target.getBoundingClientRect().top;
                
                if (isIntersecting) {
                    if(target.classList.contains("section--primary")) background.classList = "background background--primary";
                    if(target.classList.contains("section--secondary")) background.classList = "background background--secondary";
                    if(target === header) {background.style.opacity = 1; return};
                    
                    const reverse = target.classList.contains("section--neutral")

                    window.onscroll = ()=>onScroll(target, initialDistanceToTop, reverse);
                    observer.unobserve(target);
                }
            });
        },
        intersectionConfig
    );

    sections.forEach((item) => {
        observer.observe(item);
    });
}

document.addEventListener("DOMContentLoaded", function() {
    addIntersectedClass();
    // changeBackgroundColor();
});