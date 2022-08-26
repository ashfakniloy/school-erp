import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { resetInfo } from "../../redux/features/info/infoSlice";

function useRedirect() {
  const [render, setRender] = useState(false);
  const { user_role } = useSelector((state) => state.auth);
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    if (user_role === null) {
      setRender(true);
      dispatch(resetInfo());
    }
    user_role === "super admin" && router.replace("/admin");
    user_role === "admin" && router.replace("/admin");
    user_role === "teacher" && router.replace("/teacher");
    user_role === "student" && router.replace("/student");
    user_role === "parent" && router.replace("/parent");
  }, [user_role, router, dispatch]);

  return { render };
}

export default useRedirect;
