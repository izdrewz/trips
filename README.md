# Trips

Trips is a local-first travel planner and travel journal.

Each trip becomes its own volume on a bookshelf. A volume has sections for itinerary planning, diary entries, bookings, transport routes, packing, shopping, attraction conditions, outfits and journal pages.

## Privacy

This repository contains only application code. Your travel library and uploaded files are saved in IndexedDB in the browser where you use the app. They are not committed to GitHub and this version does not send them to a server.

Use **Export backup** regularly. The backup is a JSON file containing your library and uploaded files. Keep it in private storage and do not commit it to this repository.

## Running it

Use a local static server, for example `python3 -m http.server 8000`, then open `http://localhost:8000`.

## GitHub Pages

Open **Settings → Pages** in the repository and choose **GitHub Actions** as the build source. The included workflow deploys updates pushed to `main`.

## Device changes

The app autosaves on the current device and browser. Before clearing browser data or moving devices, export a backup. Use Import backup to restore it elsewhere.
