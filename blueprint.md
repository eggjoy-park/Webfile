# Project Blueprint

## Overview

A simple web application that displays a rotating quote, weekly weather forecast, and news feeds from selected RSS sources in a multi-column layout. The application is built with modern, framework-less HTML, CSS, and JavaScript.

## Design and Features (Current Version)

*   **Quote of the Day:** Displays a rotating quote in a slim, full-width bar at the top of the page.
*   **Weekly Weather Forecast:** Displays the 7-day weather forecast for a default location (Seoul). On desktop, it's a centered card layout. On mobile devices (under 768px), it becomes a horizontally-scrollable container, preventing layout breakage and improving usability.
*   **News Feeds:** Displays the latest news articles from three different sources in a full-width list format.
*   **Data Source:** Fetches data from the respective RSS feeds using the `rss2json` API and weather data from the Open-Meteo API.
*   **Styling:** Includes a dark mode toggle and responsive design.
*   **3D Animated Fish:** Displays multiple animated 3D fish swimming across the bottom of the screen as a visual enhancement using Three.js.

## Current Task: Implement 3D swimming fish animation

**Plan:**

1.  **Remove 2D Fish:**
    *   Removed the `<swimming-fish>` component from `index.html`.
    *   Deleted `fish.js`.
2.  **Add Three.js Library:**
    *   Added the Three.js library via CDN to `index.html` using an `importmap`.
3.  **Create 3D Scene Container:**
    *   Added a `<div id="scene-container"></div>` to `index.html` to host the Three.js canvas.
    *   Added CSS to `style.css` for `#scene-container` to position it fixed at the bottom of the screen.
4.  **Create `scene.js`:**
    *   Initialized a Three.js scene, camera, and WebGLRenderer.
    *   Added ambient and directional lighting.
    *   Created simple 3D fish models using `CapsuleGeometry` and `CylinderGeometry`.
    *   Implemented an animation loop to move the fish across the screen, add bobbing motion, and animate their tails.
    *   Handled window resizing to maintain responsiveness.
5.  **Integrate `scene.js`:**
    *   Imported `scene.js` as a module in `index.html`.
