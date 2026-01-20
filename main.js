
const themeToggle = document.getElementById('theme-toggle');
const quoteElement = document.getElementById('quote');
const authorElement = document.getElementById('author');
const quoteBar = document.getElementById('quote-bar');

const feeds = [
    {
        url: 'https://www.mk.co.kr/rss/30000001/',
        containerId: 'feed-1',
        title: '매일경제'
    },
    {
        url: 'https://www.yna.co.kr/rss/news.xml',
        containerId: 'feed-2',
        title: '연합뉴스'
    },
    {
        url: 'https://www.aitimes.com/rss/allArticle.xml',
        containerId: 'feed-3',
        title: 'AI 타임스'
    }
];

function showQuote() {
    quoteBar.classList.add('fade-out');
    setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        const { quote, author } = quotes[randomIndex];
        quoteElement.textContent = `"${quote}"`;
        authorElement.textContent = `- ${author}`;
        quoteBar.classList.remove('fade-out');
        quoteBar.classList.add('fade-in');
        setTimeout(() => {
            quoteBar.classList.remove('fade-in');
        }, 500);
    }, 500);
}

async function fetchNews(feed) {
    const { url, containerId, title } = feed;
    const container = document.getElementById(containerId);
    if (!container) return;

    const API_URL = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(url)}`;

    try {
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error(`Network response was not ok for ${title}`);
        }
        const data = await response.json();

        if (data.status === 'ok') {
            let html = `<h1>${title}</h1><div class="news-list-simple">`;
            // Take only the first 10 items for a cleaner look
            const items = data.items.slice(0, 10);
            items.forEach(item => {
                html += `
                    <a href="${item.link}" target="_blank" rel="noopener noreferrer" class="news-item-simple">
                        <h4>${item.title}</h4>
                        <p class="pub-date">${new Date(item.pubDate).toLocaleDateString('ko-KR')}</p>
                    </a>
                `;
            });
            html += '</div>';
            container.innerHTML = html;
        } else {
            throw new Error(`Failed to fetch RSS feed for ${title}`);
        }
    } catch (error) {
        console.error('Error fetching news:', error);
        container.innerHTML = `<h1>${title}</h1><p>뉴스 피드를 불러오는 데 실패했습니다. 나중에 다시 시도해주세요.</p>`;
    }
}

function fetchAllNews() {
    feeds.forEach(fetchNews);
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

// Initial calls
showQuote();
setInterval(showQuote, 20000);
fetchAllNews();
