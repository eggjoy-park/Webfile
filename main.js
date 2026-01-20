
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

async function getNews() {
    const RSS_URL = `https://www.mbn.co.kr/rss/`;
    // Use a proxy to avoid CORS issues
    const API_URL = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(RSS_URL)}`;

    try {
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error('네트워크 응답이 올바르지 않습니다');
        }
        const data = await response.json();

        if (data.status === 'ok') {
            const items = data.items;
            let html = '<h1>매일경제 뉴스</h1>';
            items.forEach(item => {
                html += `
                    <div class="news-item">
                        <h4><a href="${item.link}" target="_blank" rel="noopener noreferrer">${item.title}</a></h4>
                        <p class="pub-date">${new Date(item.pubDate).toLocaleString('ko-KR')}</p>
                    </div>
                `;
            });
            newsContainer.innerHTML = html;
        } else {
            throw new Error('RSS 피드를 가져오는데 실패했습니다');
        }
    } catch (error) {
        console.error('뉴스 가져오기 오류:', error);
        newsContainer.innerHTML = '<p>뉴스 피드를 불러오는데 실패했습니다. 나중에 다시 시도해주세요.</p>';
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
