const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbzij5bvouKTw7OFjk00T5hARSj5XkRP3T_qGbImui_urvkaUse5YyktIlLguosp6oUPVw/exec";

/** Vercel serverless handler: proxies POST to Google Apps Script to avoid CORS. */
export default async function handler(req: { method?: string; body?: unknown }, res: { setHeader: (k: string, v: string) => void; status: (n: number) => { json: (d: unknown) => void }; json: (d: unknown) => void }) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }
  try {
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(req.body ?? {}),
    });
    const data = await response.json().catch(() => ({}));
    return res.status(response.ok ? 200 : response.status).json(data);
  } catch (err) {
    console.error(err);
    return res.status(502).json({ error: "Failed to submit to form backend" });
  }
}
