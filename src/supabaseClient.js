
import { createClient } from '@supabase/supabase-js';

// Supabase project credentials
const SUPABASE_URL = 'https://flttdztltjuvvbiejtrz.supabase.co';
const SUPABASE_PUBLISHABLE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZsdHRkenRsdGp1dnZiaWVqdHJ6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA4Njg2NzYsImV4cCI6MjA2NjQ0NDY3Nn0.mSF4uZoU2bSKWs86JjyEkGATWpnNqdRBwccHdtK9G7w';

// Create the Supabase client
export const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);
