import type { Config } from "drizzle-kit";
/** @type { import("drizzle-kit").Config } */
export default {
  dialect: "postgresql",
  schema: "./utils/schema.jsx",
  driver: "pg",
  dbCredentials: {
    url: "postgresql://Atul%20Tingre:UP4JamrWMp9e@ep-shiny-dream-a10j48sl.ap-southeast-1.aws.neon.tech/gym-trainer?sslmode=require",
  },
};
