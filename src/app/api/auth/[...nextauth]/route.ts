import NextAuth from "next-auth/next";
import GitHubProvider from "next-auth/providers/github";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import client from "../../../../../lib/db";
import { Adapter } from "next-auth/adapters";
import Credentials from "next-auth/providers/credentials";
import { signInSchema } from "../../../../../lib/zod/zod";
import { ZodError } from "zod";
import { saltAndHashPassword } from "@/utils/SaltHashedPassword";

const handler = NextAuth({
    adapter: MongoDBAdapter(client) as Adapter,
    secret: process.env.NEXTAUTH_SECRET as string,
    providers: [
        Credentials({
            // You can specify which fields should be submitted, by adding keys to the `credentials` object.
            // e.g. domain, username, password, 2FA token, etc.
            credentials: {
                email: {},
                password: {},
            },
            authorize: async (credentials) => {
                try {
                    let user = null
                    const { email, password } = await signInSchema.parseAsync(credentials)
                // logic to salt and hash password
                    const pwHash = saltAndHashPassword(password)
                // logic to verify if the user exists
                    user = await getUserFromdb(email, pwHash)
                    if (!user) {
                        throw new Error("User not found.")
                }
                // return JSON object with the user data
                    return user
                } catch (error) {
                    if (error instanceof ZodError) {
                  // Return `null` to indicate that the credentials are invalid
                    return null
                    }
                }
            },
        }),
        GitHubProvider({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string,
        }),
    ],
    pages: {
        signIn: "/Iniciar-Sesion",
    },
})

export { handler as GET, handler as POST }