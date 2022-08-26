import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import cookie from "cookie";
import { API_URL } from "../../../config";

const nextAuthOptions = (req, res) => {
  return {
    providers: [
      CredentialsProvider({
        name: "Credentials",
        authorize: async (credentials) => {
          // const payload = {
          //   email: credentials.email,
          //   password: credentials.password,
          // };
          const { loginRoute, ...values } = credentials;

          const url = `${API_URL}/${loginRoute}/login`;

          const response = await fetch(url, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(values),
          });

          const user = await response.json();

          console.log(user);

          if (response.ok && user) {
            res.setHeader("Set-Cookie", [
              cookie.serialize("role", user.role, {
                // httpOnly: true,
                // secure: process.env.NODE_ENV !== "development",
                maxAge: 30 * 24 * 60 * 60, // 30 days
                sameSite: "strict",
                path: "/",
              }),
              cookie.serialize("id", user.id, {
                // httpOnly: true,
                // secure: process.env.NODE_ENV !== "development",
                maxAge: 30 * 24 * 60 * 60, // 30 days
                sameSite: "strict",
                path: "/",
              }),
              cookie.serialize("institution_name", user.institution_name, {
                // httpOnly: true,
                // secure: process.env.NODE_ENV !== "development",
                maxAge: 30 * 24 * 60 * 60, // 30 days
                sameSite: "strict",
                path: "/",
              }),
              cookie.serialize("user_name", user.user_name, {
                // httpOnly: true,
                // secure: process.env.NODE_ENV !== "development",
                maxAge: 30 * 24 * 60 * 60, // 30 days
                sameSite: "strict",
                path: "/",
              }),
            ]);
            return user;
          } else {
            // console.log("error", user);
            throw new Error(user.message);
          }
        },
      }),
    ],

    callbacks: {
      jwt: async ({ token, user }) => {
        if (user) {
          token.user = user;

          // token.token = user.token;
          // token.id = user.id;
          // token.role = user.role;
          // token.user_name = user.user_name;
          // token.institution_name = user.institution_name;
        }

        return token;
      },
      session: async ({ session, token }) => {
        if (token) {
          session.user = token.user;
          // session.token = token.token;
          // session.id = token.id;
          // session.role = token.role;
          // session.user_name = token.user_name;
          // session.institution_name = token.institution_name;
        }

        return session;
      },
    },
    secret: process.env.NEXTAUTH_SECRET,
  };
};

export default (req, res) => {
  return NextAuth(req, res, nextAuthOptions(req, res));
};

// import NextAuth from "next-auth";
// import cookie from "cookie";
// import CredentialsProvider from "next-auth/providers/credentials";
// import { API_URL } from "../../../config";

// export default NextAuth({
//   providers: [
//     CredentialsProvider({
//       name: "Credentials",
//       authorize: async (credentials, req) => {
//         // const payload = {
//         //   email: credentials.email,
//         //   password: credentials.password,
//         // };
//         const { loginRoute, ...values } = credentials;

//         const url = `${API_URL}/${loginRoute}/login`;

//         const response = await fetch(url, {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(values),
//         });

//         const user = await response.json();

//         // console.log(user);

//         if (response.ok && user) {
// res.setHeader("Set-Cookie", [
//   cookie.serialize("role", user.role, {
//     // httpOnly: true,
//     // secure: process.env.NODE_ENV !== "development",
//     maxAge: 60 * 60 * 24 * 7, //1 week
//     sameSite: "strict",
//     path: "/",
//   }),
//   cookie.serialize("id", user.id, {
//     // httpOnly: true,
//     // secure: process.env.NODE_ENV !== "development",
//     maxAge: 60 * 60 * 24 * 7, //1 week
//     sameSite: "strict",
//     path: "/",
//   }),
//   cookie.serialize("institution_name", user.institution_name, {
//     // httpOnly: true,
//     // secure: process.env.NODE_ENV !== "development",
//     maxAge: 60 * 60 * 24 * 7, //1 week
//     sameSite: "strict",
//     path: "/",
//   }),
//   cookie.serialize("user_name", user.user_name, {
//     // httpOnly: true,
//     // secure: process.env.NODE_ENV !== "development",
//     maxAge: 60 * 60 * 24 * 7, //1 week
//     sameSite: "strict",
//     path: "/",
//   }),
// ]);
//           return user;
//         } else {
//           // console.log("error", user);
//           throw new Error(user.message);
//         }
//       },
//     }),
//   ],

//   // pages: {
//   //   signIn: "/login/super-admin",
//   // },

//   callbacks: {
//     jwt: async ({ token, user }) => {
//       if (user) {
//         token.user = user;

//         // token.token = user.token;
//         // token.id = user.id;
//         // token.role = user.role;
//         // token.user_name = user.user_name;
//         // token.institution_name = user.institution_name;
//       }

//       return token;
//     },
//     session: async ({ session, token }) => {
//       if (token) {
//         session.user = token.user;
//         // session.token = token.token;
//         // session.id = token.id;
//         // session.role = token.role;
//         // session.user_name = token.user_name;
//         // session.institution_name = token.institution_name;
//       }

//       return session;
//     },
//   },
//   secret: process.env.NEXTAUTH_SECRET,
// });

// const providers = [
//   CredentialProvider({
// name: "Credentials",
// authorize: async (credentials, req) => {
//   const payload = {
//     email: credentials.email,
//     password: credentials.password,
//   };
//   const { loginRoute } = credentials;

//   const url = `${API_URL}${loginRoute}/login`;

//   const res = await fetch(url, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(payload),
//   });

//   const user = await res.json();

//   console.log(user);

//   if (res.ok) {
//     return user;
//   } else {
//     console.log("error", user);
//   }

//   return null;
// },
//   }),
// ];

// const callbacks = {
//   // Getting the JWT token from API response
//   async jwt(token, user) {
//     if (user) {
//       token.accessToken = user.token;
//       token.id = user.id;
//     }

//     return token;
//   },

//   async session(session, user) {
//     session.accessToken = user.token;
//     session.id = user.id;
//     return session;
//   },
// };

// const options = {
//   providers,
//   callbacks,
// };

// export default (req, res) => NextAuth(req, res, options);
