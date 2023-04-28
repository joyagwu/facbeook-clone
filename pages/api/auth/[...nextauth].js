import NextAuth from 'next-auth'
//import AppleProvider from 'next-auth/providers/apple'
//import FacebookProvider from 'next-auth/providers/facebook'
import GoogleProvider from 'next-auth/providers/google'
//import EmailProvider from 'next-auth/providers/email'

export const authOptions = {
  providers: [
    // OAuth authentication providers...
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET
    }),
   
  ],
  callbacks: {
    async session({ session, token }) {
      session.user.uid = token.sub
      return session
    },
  },
  secret:process.env.NEXTAUTH_SECRET,
}

export default NextAuth(authOptions)