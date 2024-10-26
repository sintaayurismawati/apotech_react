// supabaseClient.js

import { createClient } from "@supabase/supabase-js";

// Replace these with your Supabase project URL and API key
const SUPABASE_URL = "https://zqvdihrajmihdjhbkpsl.supabase.co";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpxdmRpaHJham1paGRqaGJrcHNsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjk5Mjk4NTYsImV4cCI6MjA0NTUwNTg1Nn0.5LkOJTt0cYt3pBD1Ab1UwXT5JyHVsgq6pHyIH0wks-c";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
