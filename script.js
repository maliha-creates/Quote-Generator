const quotes = [
    "Believe you can and you're halfway there. – Theodore Roosevelt",
    "Don’t watch the clock; do what it does. Keep going. – Sam Levenson",
    "You are stronger than you think.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. – Winston Churchill",
    "Hustle in silence, let your success make the noise.",
    "Dream it. Wish it. Do it.",
    "Push yourself, because no one else is going to do it for you."
];

const quoteText = document.getElementById('quote');
const generateBtn = document.getElementById('generate');

generateBtn.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteText.textContent = quotes[randomIndex];
});
