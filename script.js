let menu = document.querySelector('.menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

const quotes = [
  "Push yourself, because no one else is going to do it for you.",
  "Every workout counts, every meal matters.",
  "Wake up with determination, go to bed with satisfaction.",
  "Don’t stop until you’re proud.",
  "Small progress is still progress.",
  "It never gets easier, you just get stronger.",
  "Discipline is choosing what you want most over what you want now.",
  "Strive for progress, not perfection.",
  "Your body can stand almost anything. It’s your mind you have to convince.",
  "Success starts with self-discipline."
];

const today = new Date();
const index = today.getDate() % quotes.length;
document.getElementById("quote-text").innerText = quotes[index];

