# Project Blueprint

## Overview

A simple web application that displays a news feed from a selected RSS source. The application is built with modern, framework-less HTML, CSS, and JavaScript.

## Design and Features (Current Version)

*   **News Feed:** Displays a list of the latest news articles from Maeil Business Newspaper (매일경제).
*   **Data Source:** Fetches data from the Maeil Business Newspaper's RSS feed (`https://www.mk.co.kr/rss/30000001/`) using the `rss2json` API to convert it to JSON.
*   **Layout:**
    *   A clean, single-column layout.
    *   A main headline "Maeil Business News".
    *   Each news article is presented in a card with a title, publication date, and a short description.
    *   Article titles are clickable links that open the original article in a new tab.
*   **Styling:**
    *   Modern and clean aesthetic.
    *   Responsive design for different screen sizes.
    *   Includes a dark mode toggle for user preference.
    *   Uses CSS variables for theming.
    *   Cards have a subtle box-shadow and rounded corners.
*   **Accessibility:**
    *   Semantic HTML for better screen reader support.
    *   Links have clear `target="_blank"` and `rel="noopener noreferrer"` attributes.

## Current Task: Implement RSS News Feed

**Plan:**

1.  **Refactor HTML (`index.html`):**
    *   Update the page title to "News Feed".
    *   Change the main container ID from `#quote-container` to `#news-container`.
    *   Add a main heading `<h1>` for the news source.
    *   Remove the `<script>` tag for `quotes.js`.
2.  **Refactor JavaScript (`main.js`):**
    *   Remove the existing quote-displaying logic.
    *   Implement a function to fetch news from the Maeil Business Newspaper RSS feed using the `rss2json.com` service.
    *   Dynamically create and inject HTML elements (cards) for each news article into the `#news-container`.
    *   Each card will contain the article's title, publication date, and description. The title will be a link to the original article.
3.  **Refactor CSS (`style.css`):**
    *   Update styles to format the new news feed layout.
    *   Add styles for news article cards (`.news-item`), titles, dates, and descriptions.
    *   Ensure the layout is responsive.
4.  **Cleanup:**
    *   Delete the now-unused `quotes.js` file.
