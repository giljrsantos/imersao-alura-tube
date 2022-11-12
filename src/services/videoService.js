import { createClient } from "@supabase/supabase-js";

const PROJECT_URL = `https://cixzwgvfvyeygomeevrd.supabase.co`;
const PUBLIC_KEY = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNpeHp3Z3ZmdnlleWdvbWVldnJkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgyMTU3MjMsImV4cCI6MTk4Mzc5MTcyM30.z7zvhyc3r0e3HCfQer-4dzkcCZHxJBbd-gQnhOT6bOI`;
const supabase = createClient(PROJECT_URL, PUBLIC_KEY);

export function videoService(){
    return {
        getAllVideos(){

           return supabase.from("video")
            .select("*")
        }
    }
}