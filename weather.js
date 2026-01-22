
document.addEventListener('DOMContentLoaded', () => {
    fetchWeather();
});

async function fetchWeather() {
    // Default to Seoul, but could be made dynamic
    const lat = 37.5665;
    const lon = 126.9780;
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=Asia%2FSingapore`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        console.error('Error fetching weather data:', error);
        const weatherContainer = document.getElementById('weather-forecast');
        weatherContainer.innerHTML = '<p>날씨 정보를 불러오는 데 실패했습니다.</p>';
    }
}

function displayWeather(data) {
    const weatherContainer = document.getElementById('weather-forecast');
    if (!data.daily) {
        weatherContainer.innerHTML = '<p>날씨 정보를 찾을 수 없습니다.</p>';
        return;
    }

    let html = '<h2>주간 날씨</h2><div class="weather-days">';

    for (let i = 0; i < 7; i++) {
        const day = new Date(data.daily.time[i]);
        const dayName = day.toLocaleDateString('ko-KR', { weekday: 'short' });
        const maxTemp = data.daily.temperature_2m_max[i];
        const minTemp = data.daily.temperature_2m_min[i];
        const weatherCode = data.daily.weathercode[i];

        html += `
            <div class="weather-day">
                <p class="day-name">${dayName}</p>
                <p class="weather-icon">${getWeatherIcon(weatherCode)}</p>
                <p class="temps">
                    <span class="max-temp">${Math.round(maxTemp)}°</span>
                    <span class="min-temp">${Math.round(minTemp)}°</span>
                </p>
            </div>
        `;
    }

    html += '</div>';
    weatherContainer.innerHTML = html;
}

function getWeatherIcon(code) {
    if (code >= 0 && code <= 1) return '☀️'; // Clear sky, mainly clear
    if (code >= 2 && code <= 3) return '⛅️'; // Partly cloudy, overcast
    if (code >= 45 && code <= 48) return '🌫️'; // Fog
    if (code >= 51 && code <= 57) return '🌧️'; // Drizzle
    if (code >= 61 && code <= 67) return '🌧️'; // Rain
    if (code >= 71 && code <= 77) return '❄️'; // Snowfall
    if (code >= 80 && code <= 82) return '🌦️'; // Rain showers
    if (code >= 85 && code <= 86) return '❄️'; // Snow showers
    if (code >= 95 && code <= 99) return '⛈️'; // Thunderstorm
    return '❔';
}
