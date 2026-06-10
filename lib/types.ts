// Voeg hier project-specifieke types toe.
// De tabel-prefix uit siteConfig.dbPrefix is een hint voor de naamgeving.

export type Json = string | number | boolean | null | { [key: string]: Json } | Json[]

// Basis Supabase-rij (alle tabellen volgen dit patroon)
export interface DbRow {
  id: string
  user_id?: string
  data: Json
  created_at?: string
}
