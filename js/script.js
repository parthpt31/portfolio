/* Typing Effect */
const text = "Cybersecurity Enthusiast | Web Developer | VAPT Specialist";
let index = 0;

function typingEffect() {
    document.querySelector(".typing").textContent =
        text.slice(0, index++);
    if (index <= text.length) setTimeout(typingEffect, 80);
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
        if (sec.getBoundingClientRect().top < window.innerHeight - 100) {
            sec.style.opacity = 1;
            sec.style.transform = "translateY(0)";
            sec.style.transition = "0.6s";
        }
    });
});

/* EmailJS */
(function () {
    emailjs.init("L6XQJmE4MWYbyO-01"); // replace
})();

document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm(
        "service_wjzqa97",   // replace
        "template_58dr62x",  // replace
        this
    ).then(
        () => alert("Message sent successfully!"),
        () => alert("Failed to send message!")
    );

    this.reset();
});
