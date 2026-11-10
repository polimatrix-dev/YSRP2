// Cloudflare Pages Function: POST /api/join
// Requires a D1 database bound to this project with the variable name DB.
export async function onRequestPost({ request, env }) {
  const json = (o, s = 200) => new Response(JSON.stringify(o), { status: s, headers: { 'Content-Type': 'application/json' } });
  let b;
  try { b = await request.json(); } catch { return json({ error: 'Invalid request.' }, 400); }
  if (b.website) return json({ ok: true }); // honeypot: bots fill this in
  const email = String(b.email || '').trim().toLowerCase();
  const name = String(b.name || '').trim().slice(0, 100);
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email) || email.length > 200) return json({ error: 'Enter a valid email address.' }, 400);
  if (b.consent !== true) return json({ error: 'Consent is required.' }, 400);
  if (!env.DB) return json({ error: 'Signups are not set up yet.' }, 500);
  try {
    await env.DB.prepare('INSERT OR IGNORE INTO signups (email, name, consent, created_at) VALUES (?, ?, 1, ?)')
      .bind(email, name, new Date().toISOString()).run();
  } catch { return json({ error: 'Could not save your signup. Try again.' }, 500); }
  return json({ ok: true });
}
