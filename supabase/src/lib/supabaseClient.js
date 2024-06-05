import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
    'https://ycxlxueqwsqdcavdjrhu.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InljeGx4dWVxd3NxZGNhdmRqcmh1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTYzMTA1MzEsImV4cCI6MjAzMTg4NjUzMX0.RA4mmbYiTTe8fvpMVwVGKcHpLawTTbm82alIlvNJd74'
)