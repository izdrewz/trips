# Trips

Trips is a local-first travel planner and travel journal. Each trip becomes its own volume on a bookshelf, with itinerary planning, diary entries, bookings, transport routes, packing, shopping, attraction conditions, outfits and journal pages.

## Published Andalusia 2026 record

This repository now deliberately contains `data/andalusia-2026.js`. It is a public trip record requested by its owner and includes the Andalusia 2026 itinerary, booking references, transport, packing, shopping, requirements and outfit plans. The live app imports it automatically into a new browser library.

## Local changes and backups

After the published trip loads, edits and any files you attach in the app are saved in IndexedDB in the browser where you use it. They are not automatically pushed back to GitHub. Use **Export backup** before clearing browser data or moving devices. Import backup restores a saved library.

## Running it

Use a local static server, for example `python3 -m http.server 8000`, then open `http://localhost:8000`.

## GitHub Pages

Open **Settings → Pages** in the repository and choose **GitHub Actions** as the build source. The included workflow deploys updates pushed to `main`.
