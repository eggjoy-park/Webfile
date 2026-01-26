# Project Blueprint

## Overview

A simple web application that displays a rotating quote, weekly weather forecast, and news feeds from selected RSS sources in a multi-column layout. The application is built with modern, framework-less HTML, CSS, and JavaScript.

## Design and Features (Current Version)

*   **Quote of the Day:** Displays a rotating quote in a slim, full-width bar at the top of the page.
*   **Weekly Weather Forecast:** Displays the 7-day weather forecast for a default location (Seoul). On desktop, it's a centered card layout. On mobile devices (under 768px), it becomes a horizontally-scrollable container, preventing layout breakage and improving usability.
*   **News Feeds:** Displays the latest news articles from three different sources in a full-width list format.
*   **Data Source:** Fetches data from the respective RSS feeds using the `rss2json` API and weather data from the Open-Meteo API.
*   **Styling:** Includes a dark mode toggle and responsive design.

## Current Task: Implement Horizontal Scrolling for Mobile Weather

**Plan:**

1.  **Modify `style.css` for Improved Mobile Layout:**
    *   **Enable Horizontal Scrolling:** Applied `overflow-x: auto` and `flex-wrap: nowrap` to the `.weather-days` container for screens narrower than 768px.
    *   **Consistent Card Size:** Set `flex: 0 0 auto` for `.weather-day` elements within the scrolling container to maintain a consistent width and prevent them from shrinking or wrapping undesirably.
    *   **Hide Scrollbar:** Added rules to hide the horizontal scrollbar for a cleaner visual appearance on all browsers.
    *   **Adjusted Padding:** Modified padding for the `#weather-forecast` container and added padding to the `.weather-days` container to ensure proper spacing and prevent content from touching the screen edges.
