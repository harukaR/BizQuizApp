import { SupabaseCredentials } from '@/types/database'
import { createClient } from '@supabase/supabase-js'



const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL|| "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY|| "";

export const supabase = createClient<SupabaseCredentials>(supabaseUrl, supabaseAnonKey)