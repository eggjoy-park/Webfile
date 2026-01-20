# Project Blueprint

## Overview

A simple web application that displays a rotating quote and news feeds from selected RSS sources in a multi-column layout. The application is built with modern, framework-less HTML, CSS, and JavaScript.

## Design and Features (Current Version)

*   **Quote of the Day:** Displays a rotating quote in a slim, full-width bar at the top of the page.
*   **News Feeds:** Displays the latest news articles from three different sources in a full-width list format.
*   **Data Source:** Fetches data from the respective RSS feeds using the `rss2json` API.
*   **Styling:** Includes a dark mode toggle and responsive design.

## Current Task: Revert to a Simplified 3-Column Layout

**Plan:**

1.  **Update `main.js`:**
    *   Modify the `fetchNews` function to generate a very simple HTML structure for each news item. It will only include the article title and its publication date, removing images and descriptions for a cleaner look.
2.  **Update `style.css`:**
    *   **Re-implement 3-Column Grid:** Change the `#feeds-container` back to a `display: grid` with three columns.
    *   **Simplify News Item Style:** Create a new, minimalist style for `.news-item-simple`. This will be a text-only item with a simple border or separator, removing all complex card-like properties (shadows, backgrounds, etc.).
    *   Adjust typography and spacing to fit the simple, multi-column text layout.
