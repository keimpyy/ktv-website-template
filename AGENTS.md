# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

# Template setup

All client-specific values (naam, kleuren, diensten, contact) leven in `lib/config.ts`.
Supabase clients staan in `lib/supabase/`. Voeg project-specifieke tabellen en types toe in `lib/types.ts` en `lib/data.ts`.
