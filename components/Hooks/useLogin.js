import { toast } from "react-toastify";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";

function useLogin(loginRoute, dashboardRoute) {
  const router = useRouter();
  const loginUser = (values) => {
    signIn("credentials", {
      ...values,
      loginRoute,
      redirect: false,
      // The page where you want to redirect to after a
      // successful login
      // callbackUrl: `${window.location.origin}/${dashboardRoute}`,
      // callbackUrl: dashboardRoute,
    }).then(({ ok, error }) => {
      if (ok) {
        router.push(`/${dashboardRoute}`);
      } else {
        console.log(error);
        toast.error(error);
      }
    });
  };

  return { loginUser };
}

export default useLogin;

// function useLogin(loginRoute, dashboardRoute) {
//   const router = useRouter();
//   const dispatch = useDispatch();
//   const url = `${NEXT_URL}/api/login`;

//   const loginUser = async (values) => {
//     const res = await fetch(url, {
//       method: "POST",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ values, loginRoute }),
//     });

//     const data = await res.json();

//     console.log(data);

//     if (res.ok) {
//       console.log("success", data);
//       // localStorage.setItem("token", data.token);
//       // localStorage.setItem("id", data.id);
//       // localStorage.setItem("user_role", data.role);
//       // localStorage.setItem("identity_id", data.identity_id);
//       // localStorage.setItem("token", JSON.stringify(data.token));
//       // localStorage.setItem("id", JSON.stringify(data.id));
//       // localStorage.setItem("user_role", JSON.stringify(data.role));
//       dispatch(doLogin(data));
//       router.push(dashboardRoute);
//     } else {
//       console.log("error", data);
//       toast.error(data.message);
//     }
//   };

//   return { loginUser };
// }

// export default useLogin;
