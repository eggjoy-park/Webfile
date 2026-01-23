# Project Blueprint

## Overview

A simple web application that displays a rotating quote, weekly weather forecast, and news feeds from selected RSS sources in a multi-column layout. The application is built with modern, framework-less HTML, CSS, and JavaScript.

## Design and Features (Current Version)

*   **Quote of the Day:** Displays a rotating quote in a slim, full-width bar at the top of the page.
*   **Weekly Weather Forecast:** Displays the 7-day weather forecast for a default location (Seoul). The forecast is presented in a visually appealing card-based layout with icons and temperature details. The layout is fully responsive and optimized for mobile devices.
*   **News Feeds:** Displays the latest news articles from three different sources in a full-width list format.
*   **Data Source:** Fetches data from the respective RSS feeds using the `rss2json` API and weather data from the Open-Meteo API.
*   **Styling:** Includes a dark mode toggle and responsive design.

## Current Task: Optimize Weather Forecast for Mobile

**Plan:**

1.  **Enhance `style.css` for Mobile Responsiveness:**
    *   Adjusted weather card sizes and spacing for tablet-sized screens (under 768px).
    *   For small mobile screens (under 480px), transformed the weather card layout into a vertical list view. This ensures better readability and usability by displaying each day's forecast in a single, clear row.
