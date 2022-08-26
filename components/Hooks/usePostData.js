import { useSelector } from "react-redux";
import { useSession } from "next-auth/react";
import { API_URL } from "../../config";
import { toast } from "react-toastify";

function usePostData(route) {
  // const { token, id } = useSelector((state) => state.auth);
  const { data } = useSession();
  const { token, id } = data ? data.user : "";

  const url = `${API_URL}${route}/${id}`;

  const postData = async (values, formik) => {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(values),
    });

    const data = await res.json();

    if (res.ok) {
      toast.success("Form Submitted Successfully!");
      console.log("message", data.data);
      // formik.resetForm();
    } else {
      console.log("error", data.message);
      toast.error(data.message);
    }
  };

  return { postData };
}

export default usePostData;
