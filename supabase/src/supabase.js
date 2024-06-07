import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://astvsyfxlyansxfbtfos.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFzdHZzeWZ4bHlhbnN4ZmJ0Zm9zIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTcyNzk4MzIsImV4cCI6MjAzMjg1NTgzMn0.HTkaQ322E1Od0HVwY9D2px7E8Hhh-5EEoIrapeh2j4A'

export const supabase = createClient(supabaseUrl, supabaseKey)