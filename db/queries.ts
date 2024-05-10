import { cache } from "react";
import db from "@/db/drizzle";
import { auth } from "@clerk/nextjs";
import { getAuth } from "@clerk/nextjs/server";
import { eq } from "drizzle-orm";
import { userProgress } from "@/db/schema";

export const getUserProgress = cache(async()=>{
    const {userId} = await getAuth();

    if(!userId){
        return null;
    };

    const data =await db.query.userProgress.findFirst({
        where:eq(userProgress.userId, userId),
        with:{
            activeCourse:true,
        },
    });

    return data;
})

export const getCourses = cache(async () => {
    const data = await db.query.courses.findMany();

    return data;
})