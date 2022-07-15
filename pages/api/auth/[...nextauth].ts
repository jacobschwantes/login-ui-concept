import NextAuth, { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials"
import Auth0Provider from "next-auth/providers/auth0"
export const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
        name: "Credentials",
    // The credentials is used to generate a suitable form on the sign in page.
    // You can specify whatever fields you are expecting to be submitted.
    // e.g. domain, username, password, 2FA token, etc.
    // You can pass any HTML attribute to the <input> tag through the object.
    credentials: {
      username: { label: "Username", type: "text", placeholder: "jsmith" },
      password: {  label: "Password", type: "password" }
    },
      async authorize(credentials) {
        console.log('checking')
        const users = [
          { email: "jacobschwantes@outlook.com", password: "pass12345!" },
        ];
        const data = users.find(
          (item) =>
            item.email === credentials.email &&
            item.password === credentials.password
        );
        // Returning token to set in session
        if (data) {
            // Any object returned will be saved in `user` property of the JWT
            return data
          } else {
            // If you return null then an error will be displayed advising the user to check their details.
            throw new Error("Invalid username or password"); // Redirect to error page
    
            // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
          }
      },
    }),
  ],
};
export default NextAuth(authOptions)
