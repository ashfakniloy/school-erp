import Login from "../components/Login";
import Router, { useRouter } from "next/router";
import { useEffect } from "react";
import { useSession } from "next-auth/react";
import { role } from "../config";
import Loader from "../components/Layout/Loader";

function Home() {
  const router = useRouter();
  // const { data } = useSession();
  // const { role } = data ? data.user : "";

  // useEffect(() => {
  //   if (role) {
  //     router.reload();
  //   }
  // }, [role, router]);

  if (!role) {
    return (
      <>
        <Login />
      </>
    );
  } else {
    router.reload();
  }

  return (
    <>
      <Login />
    </>
  );
}

export default Home;
