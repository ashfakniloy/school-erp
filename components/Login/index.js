import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { userCategories } from "./userCategories";

function Login() {
  //for redirecting to dashboard if logged in
  // const { token, id, user_role } = useSelector((state) => state.auth);

  // const dashboardRoute = user_role && user_role.split("super ").join("");

  // const router = useRouter();

  // useEffect(() => {
  //   if (token && id) {
  //     router.push(`/${dashboardRoute}`);
  //   }
  // }, [token, id, router, dashboardRoute]);

  return (
    <div className="flex justify-center items-center h-screen bg-slate-200">
      <div className="grid grid-cols-5 bg-white p-5">
        {userCategories.map((user) => (
          <div
            key={user.id}
            className="py-5 text-center border-r border-slate-200 last:border-r-0"
          >
            <Image src={user.icon} alt={user.name} width={100} height={100} />
            <h4 className="my-4 mx-5 py-4 text-xl font-oswald tracking-widest font-bold border-y text-slate-700 border-slate-200">
              {user.name}
            </h4>
            <Link href={user.link} passHref>
              <div className="px-3 py-3 mx-20 border-2 border-green-500 rounded text-sm text-green-500 hover:bg-gray-100 transition duration-300 cursor-pointer">
                <p>Login as {user.button}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Login;
