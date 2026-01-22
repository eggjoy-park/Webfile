# Project Blueprint

## Overview

A simple web application that displays a rotating quote, weekly weather forecast, and news feeds from selected RSS sources in a multi-column layout. The application is built with modern, framework-less HTML, CSS, and JavaScript.

## Design and Features (Current Version)

*   **Quote of the Day:** Displays a rotating quote in a slim, full-width bar at the top of the page.
*   **Weekly Weather Forecast:** Displays the 7-day weather forecast for a default location (Seoul).
*   **News Feeds:** Displays the latest news articles from three different sources in a full-width list format.
*   **Data Source:** Fetches data from the respective RSS feeds using the `rss2json` API and weather data from the Open-Meteo API.
*   **Styling:** Includes a dark mode toggle and responsive design.

## Current Task: Add Weekly Weather Forecast

**Plan:**

1.  **Create `weather.js`:**
    *   Implement `fetchWeather` function to get weekly forecast data from the Open-Meteo API.
    *   Implement `displayWeather` function to render the weather data into a 7-day forecast view.
    *   Include weather icons for different conditions.
2.  **Update `index.html`:**
    *   Add a `<div id="weather-forecast"></div>` placeholder for the weather section.
    *   Link the new `weather.js` file.
3.  **Update `style.css`:**
    *   Add styling for the `#weather-forecast` container.
    *   Style the individual day elements within the forecast, including temperature and icons.
    *   Ensure the layout is responsive and adjusts for smaller screens.
