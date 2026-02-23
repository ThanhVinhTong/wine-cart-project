import NextAuth from "next-auth/next";
import GoogleProvider  from 'next-auth/providers/google'

const authConfig = {
  providers: [
    GoogleProvider ({
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_SECRET!
    })
  ],
  pages: {
    signIn: '/signin'
  }
}

const handler = NextAuth(authConfig);

export { handler as GET, handler as POST};