# Bol Bhai! — The Indian party guessing game

A quick one-phone Heads Up-style guessing game built for Indian game nights.

**Play:** https://ronitjadhav.github.io/bol-bhai/

## Features
- Over 2,000 prompts in 9 decks: everyday English, household objects, Indian food, actions, nature, travel, Bollywood movies, celebrities, India and cricket
- Responsive, landscape-first mobile interface with big, legible cards and left/right answer controls
- Orange (`#FF6600`) and charcoal visual language
- Tilt down for **Correct**, tilt up for **Pass**, return the phone to neutral to advance
- 30-, 60-, 90- and 120-second rounds with large timer and pause/resume
- Correct/Pass feedback displayed for about 1.15 seconds
- Local preferences, installable web app, offline caching and no accounts

## iPhone / fullscreen

iPhone Safari does **not** support regular web-page fullscreen. Open the game in **Safari → Share → Add to Home Screen**, select **Open as Web App**, and launch it from the Home Screen for a browser-chrome-free experience. iOS may still show some system UI. iOS may request permission to access motion sensors on the first round.

## Development

Static HTML, CSS and JavaScript, no build tools required. Run `python3 -m http.server 8000` and open http://localhost:8000 or use any simple local web server. GitHub Actions deploys the site from `main`. The service worker caches the game for offline use after a successful visit.

## Design note

Orange `#FF6600` is an approximate KTM-style accent. The precise KartenLabs orange could not be independently checked when this version was made.
