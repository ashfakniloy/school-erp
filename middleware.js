// import { withAuth } from "next-auth/middleware";
// import { NextResponse } from "next/server";

// export default withAuth(
//   function middleware(req) {
//     return NextResponse.redirect(new URL("/admin", req.url));
//   },
//   {
//     callbacks: {
//       authorized({ token }) {
//         return token?.role === "super admin";
//       },
//     },
//   }
// );

// export const config = {
//   matchers: ["/", "/login:path*"],
// };

// export { default } from "next-auth/middleware"
import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export default async function middleware(req) {
  const { cookies, url } = req;
  // const jwt = cookies.get("next-auth.session-token");

  // const jwt = cookies.get("next-auth.session-token");
  const jwt = cookies.get("__Secure-next-auth.session-token");
  // console.log("session-token", jwt);
  // const jwt = cookies.get("token");
  const role = cookies.get("role");
  // const sessionToken = cookies.get("next-auth.session-token");
  const { origin, pathname } = req.nextUrl;

  // const gettoken = await getToken({ req });
  // const { token: jwt, role } = await gettoken?.user;

  // console.log("getToken", id);

  // console.log("sessionToken is", sessionToken);

  const userRole = role && role.split("super ").join("");

  if (pathname === "/") {
    if (jwt && userRole) {
      return NextResponse.redirect(`${origin}/${userRole}`);
    } else {
      NextResponse.redirect(`${origin}`);
    }

    return NextResponse.next();
  }

  if (url.includes("/login")) {
    if (jwt && userRole) {
      return NextResponse.redirect(`${origin}/${userRole}`);
    }
    return NextResponse.next();
  }

  if (pathname === "/admin/admin-accounts") {
    if (role !== "super admin") {
      return NextResponse.redirect(`${origin}/404`);
    }
  }

  if (url.includes("/admin")) {
    if (jwt === undefined || userRole !== "admin") {
      return NextResponse.redirect(`${origin}`);
    }
    return NextResponse.next();
  }
  if (url.includes("/teacher")) {
    if (jwt === undefined || userRole !== "teacher") {
      return NextResponse.redirect(`${origin}`);
    }
    return NextResponse.next();
  }
  if (url.includes("/student")) {
    if (jwt === undefined || userRole !== "student") {
      return NextResponse.redirect(`${origin}`);
    }
    return NextResponse.next();
  }
  if (url.includes("/parent")) {
    if (jwt === undefined || userRole !== "parent") {
      return NextResponse.redirect(`${origin}`);
    }
    return NextResponse.next();
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/",
    "/admin/admin-accounts",
    "/login/:path*",
    "/admin/:path*",
    "/teacher/:path*",
    "/student/:path*",
    "/parent/:path*",
  ],
};
