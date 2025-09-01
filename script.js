// Theme Toggle
const toggleBtn = document.getElementById("theme-toggle");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("light-theme");
  toggleBtn.textContent = document.body.classList.contains("light-theme") ? "☀️" : "🌙";
});

// Typing Effect
const typingText = document.querySelector(".typing-text");
const text = typingText.textContent;
typingText.textContent = "";
let i = 0;
function typeWriter() {
  if (i < text.length) {
    typingText.textContent += text.charAt(i);
    i++;
    setTimeout(typeWriter, 80);
  }
}
window.onload = typeWriter;
