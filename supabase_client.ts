require('dotenv').config();

import { createClient } from "@supabase/supabase-js";

export async function supabase_client() {
    const url = process.env.Supabase_URL
    const anonKey = process.env.Supabase_ANON_KEY
    const password = process.env.Supabase_PASSWORD

    console.log("supabase_client invoked")
    // console.log({ url, anonKey, password })

    if (url === undefined || anonKey === undefined) {
        return
    }

    const supabase = await createClient(url, anonKey)
    const { data, error } = await supabase.from('information').select()

    if (error) {
        console.log("something wrong at supabase")
    }

    console.log({ data })
}