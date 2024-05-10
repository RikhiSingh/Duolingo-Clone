import { pgTable, serial, text } from "drizzle-orm/pg-core";

export const courses = pgTable("courses", {
    // serial auto increments
    id: serial("id").primaryKey(),
    title: text("title").notNull(),
    imageSrc: text("image_src").notNull(),
});