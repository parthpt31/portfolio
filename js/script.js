/* Typing Effect */
const text = "Cybersecurity Enthusiast | Web Developer | VAPT Specialist";
let index = 0;

function typingEffect() {
    document.querySelector(".typing").textContent =
        text.slice(0, index++);
    if (index <= text.length) {
        setTimeout(typingEffect, 80);
    }
}
typingEffect();

/* Custom Cursor */
const cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", e => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
});

/* Scroll Animation */
const sections = document.querySelectorAll("section");
sections.forEach(sec => {
    sec.style.opacity = 0;
    sec.style.transform = "translateY(40px)";
});

window.addEventListener("scroll", () => {
    sections.forEach(sec => {
        const top = sec.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
            sec.style.opacity = 1;
            sec.style.transform = "translateY(0)";
            sec.style.transition = "0.6s";
        }
    });
});
