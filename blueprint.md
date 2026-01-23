# Project Blueprint

## Overview

A simple web application that displays a rotating quote, weekly weather forecast, and news feeds from selected RSS sources in a multi-column layout. The application is built with modern, framework-less HTML, CSS, and JavaScript.

## Design and Features (Current Version)

*   **Quote of the Day:** Displays a rotating quote in a slim, full-width bar at the top of the page.
*   **Weekly Weather Forecast:** Displays the 7-day weather forecast for a default location (Seoul). The forecast is presented in a visually appealing, horizontally-scrolling card-based layout with icons and temperature details. The layout is fully responsive and optimized for all screen sizes.
*   **News Feeds:** Displays the latest news articles from three different sources in a full-width list format.
*   **Data Source:** Fetches data from the respective RSS feeds using the `rss2json` API and weather data from the Open-Meteo API.
*   **Styling:** Includes a dark mode toggle and responsive design.

## Current Task: Implement Horizontal Weather Forecast on Mobile

**Plan:**

1.  **Update `style.css`:**
    *   Added a new `@media (max-width: 480px)` rule to ensure the weather forecast displays as a horizontal, scrollable list on small mobile screens.
    *   Within this rule, font sizes, padding, and widths of the weather elements were adjusted to fit the horizontal layout.
    *   The scrollbar is hidden for a cleaner look.
