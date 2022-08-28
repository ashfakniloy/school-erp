import Cookies from "js-cookie";
import { useSession } from "next-auth/react";
import useSWR from "swr";
// import { API_URL, token, id, identity_id } from "../../config";
import { API_URL } from "../../config";

function useGetData(route) {
  const { data } = useSession();
  const { token, id, identity_id } = data ? data.user : "";
  // const { token } = data ? data.user : "";
  // console.log(data);

  // const jwt = Cookies.get("next-auth.session-token");

  console.log("access data is", data);

  // console.log("nextauth token", jwt);

  const fetcher = async (url) => {
    const res = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const fetchedData = await res.json();

    console.log("fetched", fetchedData);
    return fetchedData.data;
  };

  const url = `${API_URL}/${route}/${id}/${identity_id ? identity_id : ""}`;
  const { data: fetchedData, error } = useSWR(url, fetcher);

  return {
    fetchedData: fetchedData ? fetchedData : "",
    isLoading: !error && !fetchedData,
    isError: error,
  };
}

export default useGetData;
