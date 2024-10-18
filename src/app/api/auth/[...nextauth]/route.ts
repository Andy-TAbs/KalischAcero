import NextAuth, { Session } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import client from "../../../../../lib/db";

declare module "next-auth" {
    interface Session {
        user: {
            id: string;
            name?: string | null;
            email?: string | null;
            image?: string | null;
        };
        accessToken?: string;
    }
}

const handler = NextAuth({
    secret: process.env.NEXTAUTH_SECRET as string,
    adapter: MongoDBAdapter(client), // Adaptador para guardar datos de la cuenta en MongoDB
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string,
        }),
    ],
    pages: {
        signIn: "/Iniciar-Sesion",
    },
    session: {
        strategy: "jwt", // Usar JWT para la gestión de la sesión
    },
    callbacks: {
        async jwt({ token, user, account }) {
            // Almacena información relevante en el token JWT
            if (user) {
                token.id = user.id;
                token.name = user.name;
                token.email = user.email;
            }
            if (account) {
                token.accessToken = account.access_token;
            }
            return token;
        },
        async session({ session, token }) {
            // Pasar los datos del token a la sesión
            if (session.user) {
                session.user.id = token.id as string;
                session.user.name = token.name as string;
                session.user.email = token.email as string;
                session.accessToken = token.accessToken as string;
            }
            return session;
        },
    },
    debug: true, // Activar para depuración
});

export { handler as GET, handler as POST };
