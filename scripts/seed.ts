import "dotenv/config";
import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";

import * as schema from "../db/schema";

const sql = neon(process.env.DATABASE_URL!);
// @ts-ignore
const db = drizzle(sql, { schema });

const main = async () => {
    try {
        console.log("Seeding database");

        await db.delete(schema.courses);
        await db.delete(schema.userProgress);
        await db.delete(schema.units);
        await db.delete(schema.lessons);
        await db.delete(schema.challenges);
        await db.delete(schema.challengeOptions);
        await db.delete(schema.challengeProgress);

        await db.insert(schema.courses).values([
            {
                // can remove id as we are using serial its auto incrementing but for integer we will need id for sure
                id: 1,
                title: "Spanish",
                imageSrc: "/es.svg",
            },
            {
                id: 2,
                title: "Italian",
                imageSrc: "/it.svg",
            },
            {
                id: 3,
                title: "French",
                imageSrc: "/fr.svg",
            },
            {
                id: 4,
                title: "Croatian",
                imageSrc: "/hr.svg",
            },
            {
                id: 5,
                title: "Japanese",
                imageSrc: "/jp.svg",
            },
            {
                id: 6,
                title: "Hindi",
                imageSrc: "/in.svg",
            },
        ]);

        console.log("Seeding finished");
    } catch (error) {
        console.error(error);
        throw new Error("Failed to seed the database");
    }
};

main();