import { useEffect } from "react";
import { useRouter } from "next/router";
import FullPageLoader from "../Layout/FullPageLoader";

export default function PrivateRoute({ protectedRoutes, children }) {
  const router = useRouter();

  // useEffect(() => {
  //   if (!isLoading && !isAuthenticated && pathIsProtected) {
  //     // Redirect route, you can point this to /login
  //     router.push("/");
  //   }
  // }, [isLoading, isAuthenticated, pathIsProtected]);

  // if ((isLoading || !isAuthenticated) && pathIsProtected) {
  //   return <FullPageLoader />;
  // }

  return children;
}
