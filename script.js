
// Typing Effect
// Typing Effect
const typed = new Typed(".typed-text", {
  strings: ["Santosh Kumar Sah", "a Web Developer", "a CSE(AIML) Student", "an ML Enthusiast"],
  typeSpeed: 60,
  backSpeed: 40,
  loop: true
});

// Scroll-to-top button
const scrollBtn = document.getElementById("scrollTopBtn");
window.onscroll = function () {
  scrollBtn.style.display = window.scrollY > 200 ? "block" : "none";
};
scrollBtn.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });
