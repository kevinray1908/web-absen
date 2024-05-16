// app/api/auth/[...nextauth]/route.js
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcryptjs';
import { getUserByUsername } from '../../../../../lib/db';

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                username: { label: "Username", type: "text" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                const user = await getUserByUsername(credentials.username);
                if (user && bcrypt.compareSync(credentials.password, user.password_hash)) {
                    return { id: user.id, username: user.username };
                }
                return null;
            }
        })
    ],
    pages: {
        signIn: '/login',
    },
    session: {
        jwt: true,
    },
    callbacks: {
        async jwt(token, user) {
            if (user) {
                token.id = user.id;
                token.username = user.username;
            }
            return token;
        },
        async session(session, token) {
            session.user.id = token.id;
            session.user.username = token.username;
            return session;
        }
    }
});

export { handler as GET, handler as POST };
