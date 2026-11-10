# YRSP website (Cloudflare Pages)

Files: `index.html` (the site), `flag.png`, `functions/api/join.js` (signup endpoint), `schema.sql` (database table).

## Deploy
1. Upload all these files to your GitHub repo `polimatrix-dev/YRSP` (keep the `functions` folder).
2. Cloudflare: Workers & Pages > Create application > **Pages** > Connect to Git > pick the repo.
3. Framework preset: None. Build command: empty. Build output directory: `/`. Deploy.

## Turn on the email signup
1. Cloudflare: Storage & Databases > D1 > Create database, named `yrsp-db`.
2. Open the database > Console, paste the contents of `schema.sql`, and run it.
3. Your Pages project > Settings > Bindings > Add > D1 database. Variable name: `DB`. Choose `yrsp-db`. Save.
4. Redeploy. Signups appear in D1 > yrsp-db > Tables > signups.

## Edit content
Dashed boxes in `index.html` are placeholders. Replace them with your text.
