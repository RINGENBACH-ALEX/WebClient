import { betterAuth } from "better-auth";
// Même base que src/lib/db.js (data/clients.db)
import database from "./db.js";

export const auth = betterAuth({
  database,
  emailAndPassword: { enabled: true },
  socialProviders: {
    google: {
      clientId: import.meta.env.GOOGLE_CLIENT_ID as string,
      clientSecret: import.meta.env.GOOGLE_CLIENT_SECRET as string,
    },
  },
});
