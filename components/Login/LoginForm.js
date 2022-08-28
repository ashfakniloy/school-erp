import { useEffect, useState } from "react";
import Router, { useRouter } from "next/router";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { TextField } from "../common/InputField";
import { useSelector, useDispatch } from "react-redux";
import useLogin from "../Hooks/useLogin";
import { signIn, useSession } from "next-auth/react";
import Cookies from "js-cookie";
import Loader from "../Layout/Loader";
import FullPageLoader from "../Layout/FullPageLoader";
import { BsEyeSlash, BsEye } from "react-icons/bs";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";

function LoginForm({ user, loginRoute, dashboardRoute }) {
  const [loading, setLoading] = useState();

  Router.events.on("routeChangeStart", (url) => {
    setLoading(true);
  });
  Router.events.on("routeChangeComplete", (url) => {
    setLoading(false);
  });
  Router.events.on("routeChangeError", (url) => {
    setLoading(false);
  });

  const initialvalues =
    user === "super admin"
      ? {
          email: "",
          password: "",
        }
      : {
          identity_id: "",
          email: "",
          password: "",
        };

  const validate =
    user === "super admin"
      ? Yup.object({
          email: Yup.string().required("Email is required"),
          password: Yup.string().required("Password is required"),
        })
      : Yup.object({
          identity_id: Yup.string().required("Institution Code is required"),
          email: Yup.string().required("Email is required"),
          password: Yup.string().required("Password is required"),
        });

  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);

  // const { data } = useSession();
  // const { token, id, user_name, institution_name, role } = data
  //   ? data.user
  //   : "";

  // console.log("session is", token);

  // id && Cookies.set("id", id, { expires: 30 });
  // user_name && Cookies.set("user_name", user_name, { expires: 30 });
  // institution_name &&
  //   Cookies.set("institution_name", institution_name, { expires: 30 });
  // role && Cookies.set("role", role, { expires: 30 });
  // Cookies.set('id', id)

  // const dispatch = useDispatch();

  // const { token, id, : x_role } = useSelector((state) => state.auth);

  const { loginUser } = useLogin(loginRoute, dashboardRoute);

  // useEffect(() => {
  //   if (token && id) {
  //     router.push(dashboardRoute);
  //   }
  // }, [token, id, router, dashboardRoute]);

  const handleSubmit = (values) => {
    loginUser(values);
    // const { email, password } = values;

    // login: x(values);
    // signIn("credentials", {
    //   ...values,

    //   loginRoute,
    //   redirect: false,
    //   // The page where you want to redirect to after a
    //   // successful login
    //   // callbackUrl: `${window.location.origin}/${dashboardRoute}`,
    //   // callbackUrl: dashboardRoute,
    // }).then(({ ok, error }) => {
    //   if (ok) {
    //     router.push(`/${dashboardRoute}`);
    //   } else {
    //     console.log(error);
    //     toast.error(error);
    //   }
    // });
  };

  return (
    <>
      <div className="flex justify-center items-center h-screen">
        {loading && <FullPageLoader />}
        <ToastContainer />
        <div className="bg-white px-10 py-14 shadow-lg">
          <h1 className="text-2xl font-semibold text-center">
            Log in as <span className="capitalize">{user}</span>
          </h1>
          <div className="mt-8">
            <Formik
              initialValues={initialvalues}
              validationSchema={validate}
              onSubmit={handleSubmit}
            >
              {(formik) => (
                <Form>
                  <div className="text-sm gap-y-5 md:gap-y-7">
                    <div className="min-w-[350px] space-y-4">
                      {user !== "super admin" && (
                        <TextField
                          label="Institution Id *"
                          name="identity_id"
                          type="text"
                        />
                      )}
                      <TextField label="Email *" name="email" type="email" />
                      <div className="relative">
                        <TextField
                          label="Password *"
                          name="password"
                          type={showPassword ? "text" : "password"}
                          autoComplete="on"
                        />
                        <div
                          className="absolute right-3 top-[30px] text-base p-[6px] cursor-pointer hover:bg-gray-200 active:bg-gray-300 rounded-full"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {/* {showPassword ? <FaRegEye /> : <FaRegEyeSlash />} */}
                          {showPassword ? <BsEye /> : <BsEyeSlash />}
                        </div>
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="mt-6 px-5 py-2 border-2 border-green-500 rounded text-green-500 text-sm hover:bg-gray-300 transition duration-300"
                    >
                      Login
                    </button>
                    {/* <span className="ml-5 text-sm text-green-600 ">
                      {status === "loading" && <p>logging in</p>}
                    </span> */}
                    {user === "super admin" && (
                      <p className="mt-6 text-xs text-teal-600">
                        <a
                          href="https://shannonit.vercel.app/school-management-system"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Don&apos;t have an account? Register here
                        </a>
                      </p>
                    )}
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginForm;
