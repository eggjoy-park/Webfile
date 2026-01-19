
const quoteElement = document.getElementById('quote');
const authorElement = document.getElementById('author');
const quoteContainer = document.getElementById('quote-container');
const newsContainer = document.getElementById('news-container');
const themeToggle = document.getElementById('theme-toggle');

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

// Function to fetch and display news
async function getNews() {
    const RSS_URL = `https://www.mk.co.kr/rss/30000001/`;
    // Use a proxy to avoid CORS issues
    const API_URL = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(RSS_URL)}`;

    try {
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();

        if (data.status === 'ok') {
            const items = data.items;
            let html = '<h1>Maeil Business News</h1>';
            items.forEach(item => {
                html += `
                    <div class="news-item">
                        <h2><a href="${item.link}" target="_blank" rel="noopener noreferrer">${item.title}</a></h2>
                        <p class="pub-date">${new Date(item.pubDate).toLocaleString()}</p>
                        <p>${item.description}</p>
                    </div>
                `;
            });
            newsContainer.innerHTML = html;
        } else {
            throw new Error('Failed to fetch RSS feed');
        }
    } catch (error) {
        console.error('Error fetching news:', error);
        newsContainer.innerHTML = '<p>Failed to load news feed. Please try again later.</p>';
    }
}

// Theme toggle functionality
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark-mode');
    } else {
        localStorage.removeItem('theme');
    }
});

// Apply saved theme on load
if (localStorage.getItem('theme') === 'dark-mode') {
    document.body.classList.add('dark-mode');
}

// Show a quote immediately
showQuote();

// Show a new quote every 10 seconds
setInterval(showQuote, 10000);

// Get the news on page load
getNews();
