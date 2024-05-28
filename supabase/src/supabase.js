import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ycxlxueqwsqdcavdjrhu.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InljeGx4dWVxd3NxZGNhdmRqcmh1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTYzMTA1MzEsImV4cCI6MjAzMTg4NjUzMX0.RA4mmbYiTTe8fvpMVwVGKcHpLawTTbm82alIlvNJd74'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)