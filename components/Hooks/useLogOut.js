import { useRouter } from "next/router";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { resetLogin } from "../../redux/features/auth/authSlice";
import { resetInfo } from "../../redux/features/info/infoSlice";
import { signOut } from "next-auth/react";

function useLogOut() {
  const dispatch = useDispatch();
  const router = useRouter();

  const logoutUser = () => {
    signOut({
      callbackUrl: `${window.location.origin}`,
      // redirect: false,
    });
    Cookies.remove("id");
    Cookies.remove("user_name");
    Cookies.remove("institution_name");
    Cookies.remove("role");
    // router.push("/");
    dispatch(resetInfo());
  };

  return { logoutUser };
}

export default useLogOut;
