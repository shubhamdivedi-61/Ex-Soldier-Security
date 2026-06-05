import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ajflvssngbylueafqceu.supabase.co/rest/v1/' 
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFqZmx2c3NuZ2J5bHVlYWZxY2V1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA1OTE5NzYsImV4cCI6MjA5NjE2Nzk3Nn0.IXq19TkyYogV7-_u-KWtsNrXzUwheSA00GzmHtQLkyM' 

export const supabase = createClient(supabaseUrl, supabaseAnonKey)