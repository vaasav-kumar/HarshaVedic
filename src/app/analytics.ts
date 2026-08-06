const FIREBASE_VERSION = "12.12.0";

const firebaseConfig = {
  apiKey: "AIzaSyCZixSqGK6vU7KQUDA2VGktOJZLenhh0uU",
  authDomain: "harsha-vedic.firebaseapp.com",
  projectId: "harsha-vedic",
  storageBucket: "harsha-vedic.firebasestorage.app",
  messagingSenderId: "568626770636",
  appId: "1:568626770636:web:2e824d91a1f10be2590869",
  measurementId: "G-46K1QFML0P",
};

/** Load analytics after the app mounts so CDN failures never block rendering. */
export function initAnalytics() {
  if (typeof window === "undefined") return;

  void (async () => {
    try {
      const [{ initializeApp }, { getAnalytics, logEvent }] = await Promise.all([
        import(
          /* @vite-ignore */
          `https://www.gstatic.com/firebasejs/${FIREBASE_VERSION}/firebase-app.js`
        ),
        import(
          /* @vite-ignore */
          `https://www.gstatic.com/firebasejs/${FIREBASE_VERSION}/firebase-analytics.js`
        ),
      ]);

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
