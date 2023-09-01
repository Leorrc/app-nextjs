import NextAuth from "next-auth";
import GithubProvider from 'next-auth/providers/github'

export default NextAuth({
  providers: [
    GithubProvider({
      clientId: '87fbf4b659373b033dcd',
      clientSecret: 'eb0f22c241a8029997c755ef1988ed3471f517a1',
    }),
  ],
  secret: '3d462f02784b45b19126ccb6502c8c23'
})
