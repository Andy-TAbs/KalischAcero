import NextAuth from "next-auth/next";
import GitHubProvider from "next-auth/providers/github";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import client from "../../../../../lib/db";
import { Adapter } from "next-auth/adapters";

const handler = NextAuth({
    adapter: MongoDBAdapter(client) as Adapter,
    secret: process.env.NEXTAUTH_SECRET as string,
    providers: [
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