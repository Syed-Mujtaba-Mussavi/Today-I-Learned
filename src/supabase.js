import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://hwwpbfilygwmlwdegiwl.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh3d3BiZmlseWd3bWx3ZGVnaXdsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDM2ODY5NDQsImV4cCI6MjAxOTI2Mjk0NH0.Hx7K5xPDCRK9h6xlkdm1_PkFzd3fq5NS5w0qPvAycCw";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
