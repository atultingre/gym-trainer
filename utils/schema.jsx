import { pgTable, serial, text } from "drizzle-orm/pg-core";

export const Clients = pgTable("clients", {
  id: serial("id").primaryKey(),
  image: text("image").notNull(),
});
