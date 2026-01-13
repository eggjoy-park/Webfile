
const quoteElement = document.getElementById('quote');
const authorElement = document.getElementById('author');
const quoteContainer = document.getElementById('quote-container');

function showQuote() {
    quoteContainer.classList.remove('fade-in-out');
    void quoteContainer.offsetWidth; // Trigger reflow
    quoteContainer.classList.add('fade-in-out');

    setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        const { quote, author } = quotes[randomIndex];
        quoteElement.textContent = `\"${quote}\"`;
        authorElement.textContent = `- ${author}`;
    }, 500); // Half of the animation duration
}

// Show a quote immediately
showQuote();

// Show a new quote every 10 seconds
setInterval(showQuote, 10000);
