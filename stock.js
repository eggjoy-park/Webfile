
document.addEventListener('DOMContentLoaded', () => {
    fetchStockMarketData();
});

async function fetchStockMarketData() {
    const apiKey = 'demo'; // Replace with your actual API key if needed
    const symbols = ['^GSPC', '^IXIC', '^DJI'];
    const url = `https://financialmodelingprep.com/api/v3/quote/${symbols.join(',')}?apikey=${apiKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        displayStockMarketData(data);
    } catch (error) {
        console.error('Error fetching stock market data:', error);
        const stockMarketContainer = document.getElementById('stock-market');
        stockMarketContainer.innerHTML = '<p>주식 시황 정보를 불러오는 데 실패했습니다.</p>';
    }
}

function displayStockMarketData(data) {
    const stockMarketContainer = document.getElementById('stock-market');
    if (!data || data.length === 0) {
        stockMarketContainer.innerHTML = '<p>주식 시황 정보를 찾을 수 없습니다.</p>';
        return;
    }

    let html = '<h2>주요 지수</h2><div class="stock-indices">';

    data.forEach(stock => {
        const change = stock.change.toFixed(2);
        const changePercent = stock.changesPercentage.toFixed(2);
        const isUp = stock.change >= 0;

        html += `
            <div class="stock-index">
                <p class="stock-name">${stock.name} (${stock.symbol})</p>
                <p class="stock-price">${stock.price.toLocaleString()}</p>
                <p class="stock-change ${isUp ? 'up' : 'down'}">
                    ${isUp ? '▲' : '▼'} ${change} (${changePercent}%)
                </p>
            </div>
        `;
    });

    html += '</div>';
    stockMarketContainer.innerHTML = html;
}
