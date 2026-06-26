/* Seed the published trip into IndexedDB once, then start the planner. */
(() => {
  const DB = 'trips-library';
  const STORE = 'library';
  const KEY = 'state';

  function openDB() {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(DB, 1);
      request.onupgradeneeded = () => {
        if (!request.result.objectStoreNames.contains(STORE)) request.result.createObjectStore(STORE);
      };
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
  }

  function get(store) {
    return new Promise((resolve, reject) => {
      const request = store.get(KEY);
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
  }

  function put(store, value) {
    return new Promise((resolve, reject) => {
      const request = store.put(value, KEY);
      request.onsuccess = resolve;
      request.onerror = () => reject(request.error);
    });
  }

  async function start() {
    try {
      const published = window.TRIPS_PUBLISHED_STATE;
      if (published && Array.isArray(published.trips) && published.trips.length) {
        const db = await openDB();
        const transaction = db.transaction(STORE, 'readwrite');
        const store = transaction.objectStore(STORE);
        const current = await get(store);
        const alreadyImported = current && current.trips && current.trips.some(trip => trip.id === 'andalusia-2026');
        if (!alreadyImported) {
          const next = current && Array.isArray(current.trips) && current.trips.length
            ? { trips: [...current.trips, ...published.trips], activeTripId: published.activeTripId }
            : published;
          await put(store, next);
        }
        db.close();
      }
    } catch (error) {
      console.error('Published trip seed could not be imported.', error);
    } finally {
      const app = document.createElement('script');
      app.src = 'app.js';
      document.body.appendChild(app);
    }
  }

  start();
})();
