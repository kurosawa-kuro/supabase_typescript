require('dotenv').config();

import { supabase_client } from "./supabase_client";

async function app() {
    console.log("start app")

    await supabase_client()

    console.log("end app")
}

app()
    .catch((e) => {
        console.error(`There was an error while seeding: ${e}`);
        // process.exit(1);
    })
    .finally(async () => {
        console.log('finally end app.');
        // await prisma.$disconnect();
    });