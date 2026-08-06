const FIREBASE_VERSION = "12.12.0";

const firebaseConfig = {
  apiKey: "AIzaSyChVfU7SO4y7fiu1colHQvKlTDv4OPkVzg",
  authDomain: "harshavedic-c0f7c.firebaseapp.com",
  projectId: "harshavedic-c0f7c",
  storageBucket: "harshavedic-c0f7c.firebasestorage.app",
  messagingSenderId: "837589964615",
  appId: "1:837589964615:web:04e6da89362c3b45a69e62",
  measurementId: "G-LP7M2X30F4",
};

/** Load analytics after the app mounts so CDN failures never block rendering. */
export function initAnalytics() {
  if (typeof window === "undefined") return;

  void (async () => {
    try {
      const [{ initializeApp }, { getAnalytics, logEvent }] = await Promise.all(
        [
          import(
            /* @vite-ignore */
            `https://www.gstatic.com/firebasejs/${FIREBASE_VERSION}/firebase-app.js`
          ),
          import(
            /* @vite-ignore */
            `https://www.gstatic.com/firebasejs/${FIREBASE_VERSION}/firebase-analytics.js`
          ),
        ],
      );

      const app = initializeApp(firebaseConfig);
      const analytics = getAnalytics(app);

      window.setTimeout(() => {
        logEvent(analytics, "page_view", {
          page_path: window.location.pathname || "/",
        });
      }, 3000);
    } catch {
      // Analytics is optional; ignore blocked CDN/network failures.
    }
  })();
}
