# YRSP website — Cloudflare Worker

This version matches the Cloudflare deployment screen that uses a deploy command such as `npx wrangler deploy`.

## Cloudflare Git deployment settings
- Project/Worker name: `yrsp`
- Build command: leave blank
- Deploy command: `npx wrangler deploy`
- Preview command: leave blank

The repository root contains `wrangler.jsonc`, `src/index.js`, and the `public/` static assets directory. The Worker serves the website assets and handles the signup API route.

## Email form setup
The form is intentionally inactive until D1 is connected:
1. Create a Cloudflare D1 database, e.g. `yrsp-join-list`.
2. Run `schema.sql` in the D1 console.
3. In Worker settings, add a D1 binding named `DB` and select that database.
4. Redeploy.

The form stores the submitted email address, consent flag, and timestamp. It does not send emails or automatically establish membership. Restrict database access to authorized administrators and decide on retention/deletion procedures before collecting addresses.

## Site contents
- `public/index.html`: homepage, About, Principles, Organization, Join / Get Updates.
- `public/contact.html`: separate contact page with the provided Proton Mail address.
- `public/privacy.html`: draft privacy notice.
- `public/assets/yrsp-flag.png`: supplied flag image.
- `public/styles.css`: navy, red, yellow, and white styling.
- `src/index.js`: Cloudflare Worker and signup API.

The organization section reflects the stated model: the Chairman is the highest executive authority and can veto/block parliamentary measures; a two-thirds parliamentary vote can limit the Chairman. The page says the Chairman is selected by the Party Parliament, following the user's approval of that proposed selection method. The exact scope and duration of limitations can be set in party rules.

The principles are draft wording based on the supplied About statement, not a claim that they have been formally adopted.
