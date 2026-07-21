const titles = [
    "Full Stack Developer",
    "AI Engineer",
    "Computer Vision",
    "MERN Stack Developer",
    "UI/UX Designer",
    "Frontend Developer"
];

const typewriter = document.getElementById("typewriter");

let titleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeTitle() {
    const currentTitle = titles[titleIndex];

    if (isDeleting) {
        typewriter.textContent = currentTitle.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typewriter.textContent = currentTitle.substring(0, charIndex + 1);
        charIndex++;
    }

    let speed = isDeleting ? 60 : 100;

    if (!isDeleting && charIndex === currentTitle.length) {
        speed = 1200;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        titleIndex = (titleIndex + 1) % titles.length;
        speed = 300;
    }

    setTimeout(typeTitle, speed);
}

typeTitle();
const menuIcon = document.querySelector("#menu-icon");
const navLinks = document.querySelector(".nav-links");

menuIcon.onclick = () => {
    navLinks.classList.toggle("active");
};
