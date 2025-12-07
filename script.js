/* ==========================================================
   MOBILE MENU TOGGLE
   ========================================================== */
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn?.addEventListener("click", () => {
    navLinks.classList.toggle("mobile-menu");
});


/* ==========================================================
   REVEAL ON SCROLL ANIMATION
   ========================================================== */
function revealOnScroll() {
    const reveals = document.querySelectorAll(".reveal");

    reveals.forEach((el) => {
        const top = el.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (top < windowHeight - 100) {
            el.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll(); // run initially


/* ==========================================================
   TYPING ANIMATION
   ========================================================== */
const typingElement = document.querySelector(".typing");
const typingWords = [
    "Java Full Stack Developer",
    "SQL Specialist",
    "Motivation Creator",
    "Mindset Builder"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    if (!typingElement) return;

    let currentWord = typingWords[wordIndex];

    if (!isDeleting) {
        typingElement.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === currentWord.length) {
            isDeleting = true;
            setTimeout(typeEffect, 1500);
            return;
        }
    } else {
        typingElement.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % typingWords.length;
        }
    }

    setTimeout(typeEffect, isDeleting ? 80 : 120);
}

typeEffect();


/* ==========================================================
   EXTENDED DESCRIPTION: READ MORE / SHOW LESS
   ========================================================== */
const toggleBtn = document.getElementById("toggleAbout");
const showLessBtn = document.getElementById("showLess");
const extendedBox = document.getElementById("extendedAbout");

toggleBtn?.addEventListener("click", () => {
    extendedBox.classList.add("visible");
    toggleBtn.style.display = "none";
});

showLessBtn?.addEventListener("click", () => {
    extendedBox.classList.remove("visible");
    toggleBtn.style.display = "inline-block";
});


/* ==========================================================
   PARTICLES JS CONFIG
   ========================================================== */
particlesJS("particles-js", {
    "particles": {
        "number": { "value": 55, "density": { "enable": true, "value_area": 800 }},
        "color": { "value": "
