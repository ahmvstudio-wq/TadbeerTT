import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

let clientInstance = null;

if (supabaseUrl && supabaseAnonKey && supabaseUrl.startsWith('http')) {
  try {
    clientInstance = createClient(supabaseUrl, supabaseAnonKey);
  } catch (err) {
    console.error('Failed to initialize Supabase client:', err);
  }
}

if (!clientInstance) {
  console.warn('Supabase env credentials missing or invalid. Running in local/offline fallback mode.');
  // Safe mock client structure to prevent runtime method call crashes in service layer
  clientInstance = {
    from: () => ({
      select: () => ({
        order: () => Promise.resolve({ data: [], error: new Error('Supabase not configured') }),
        insert: () => Promise.resolve({ data: [], error: new Error('Supabase not configured') })
      }),
      insert: () => ({
        select: () => Promise.resolve({ data: [], error: new Error('Supabase not configured') })
      })
    }),
    rpc: () => Promise.resolve({ data: null, error: new Error('Supabase not configured') })
  };
}

export const supabase = clientInstance;
