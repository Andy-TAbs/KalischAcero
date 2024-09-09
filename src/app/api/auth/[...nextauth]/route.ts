import NextAuth from "next-auth/next";
import GitHubProvider from "next-auth/providers/github";

const handler = NextAuth({
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