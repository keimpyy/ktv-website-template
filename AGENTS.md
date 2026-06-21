# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

# Template setup

All client-specific values (naam, kleuren, diensten, contact) leven in `lib/config.ts`.
Supabase clients staan in `lib/supabase/`. Voeg project-specifieke tabellen en types toe in `lib/types.ts` en `lib/data.ts`.

# Commit prefix

Always prefix commit messages with `[PC]` to indicate which machine the commit came from. Example: `[PC] fix: update button styles`

# Git sync check (session start)

At the start of every session, run `git fetch origin` and check if the local branch is behind the remote. If it is, warn the user immediately with how many commits they are behind and tell them to run `git pull` before making any changes.
