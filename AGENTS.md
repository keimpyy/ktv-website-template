# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

# Template setup

All client-specific values (naam, kleuren, diensten, contact) leven in `lib/config.ts`.
Supabase clients staan in `lib/supabase/`. Voeg project-specifieke tabellen en types toe in `lib/types.ts` en `lib/data.ts`.

# Commit prefix

At the start of every session, run `echo $COMPUTERNAME` (Bash) to detect the machine name, and use it as the commit prefix. Example: if `$COMPUTERNAME` returns `KT-PC`, prefix commits with `[KT-PC]`. This way the prefix is always correct regardless of which machine the session runs on.

# Git sync check (session start)

At the start of every session, run `git fetch origin` and check if the local branch is behind the remote. If it is, automatically run `git pull` and inform the user that you pulled and how many commits were pulled in.
