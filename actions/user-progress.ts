"use server";

import db from "@/db/drizzle";
import { getCourseById, getUserProgress } from "@/db/queries";
import { challengeProgress, userProgress } from "@/db/schema";
import { auth, currentUser } from "@clerk/nextjs";
import { and, eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const upsertUserProgress = async (courseId: number) => {
    const { userId } = await auth();
    const user = await currentUser();

    if (!userId || !user) {
        throw new Error("Unauthorized");
    }

    const course = await getCourseById(courseId);

    if (!course) {
        throw new Error("Course not found");
    }

    // TODO: enable once units and lessons are added
    // if(!course.units.length || !course.units[0].lessons.length){
    //     throw new Error("Course is empty");
    // }

    const existingUserProgress = await getUserProgress();

    if (existingUserProgress) {
        await db.update(userProgress).set({
            activeCourseId: courseId,
            userName: user.firstName || "User",
            userImageSrc: user.imageUrl || "/mascot.svg",
        });

        revalidatePath("/courses");
        revalidatePath("/learn");
        redirect("/learn");

    }

    await db.insert(userProgress).values({
        userId,
        activeCourseId: courseId,
        userName: user.firstName || "User",
        userImageSrc: user.imageUrl || "/mascot.svg",
    });

    revalidatePath("/courses");
    revalidatePath("/learn");
    redirect("/learn");
};

export const reduceHearts = async (challengeId: number) => {
    const { userId } = await auth();

    if (!userId) {
        throw new Error("Unauthorized");
    }

    const currentUserProgress = await getUserProgress();
    // TODO Get user progress

    const existingChallengeProgress = await db.query.challengeProgress.findFirst({
        where: and(
            eq(challengeProgress.userId, userId),
            eq(challengeProgress.challengeId, challengeId),
        ),
    });

    const isPractice = !!existingChallengeProgress;

    if (isPractice) {
        // passing field error
        return { error: "practice" };
    }

    if (!currentUserProgress) {
        // kind of breaks the app (security issue(reset to default))
        throw new Error("User progress not found");
    }

    // TODO Handle Subscription

    if (currentUserProgress.hearts === 0) {
        return { error: "hearts" };
    }

    await db.update(userProgress).set({
        hearts: Math.min(currentUserProgress.hearts - 1, 0),
    });
};