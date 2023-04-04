import { createClient } from '@supabase/supabase-js'

const URL = 'https://jqwyckuggabufxswcrzq.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Impxd3lja3VnZ2FidWZ4c3djcnpxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODA2MTgyNDgsImV4cCI6MTk5NjE5NDI0OH0.B1imuSn1SB3eV0SKHsWdpuEEpQeKJzwkFStu5tvsmEI';


export const supabase = createClient(URL, API_KEY);
