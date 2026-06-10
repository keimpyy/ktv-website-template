import { createClient } from '@supabase/supabase-js'

// Alleen server-side gebruiken (API routes, server actions)
export function createAdminClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY

  if (!url || !serviceRoleKey) {
    const missing = [
      !url ? 'NEXT_PUBLIC_SUPABASE_URL' : '',
      !serviceRoleKey ? 'SUPABASE_SERVICE_ROLE_KEY' : '',
    ].filter(Boolean).join(', ')
    throw new Error(`Supabase admin env vars missen: ${missing}.`)
  }

  return createClient(url, serviceRoleKey, {
    auth: { autoRefreshToken: false, persistSession: false },
  })
}
