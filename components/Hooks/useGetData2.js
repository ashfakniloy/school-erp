import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import { API_URL } from "../../config";

function useGetData2(route) {
  const [fetchedData, setFetchedData] = useState([]);

  const { data } = useSession();
  const { token, id, identity_id } = data ? data.user : "";

  const url = `${API_URL}/${route}/${id}/${identity_id ? identity_id : ""}`;

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(url, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await res.json();

      if (res.ok) {
        setFetchedData(data.data);
        console.log("all data", data);
      } else {
        console.log("error", data.data);
      }
    };
    getData();
  }, [setFetchedData, url, token]);

  return { fetchedData };
}

export default useGetData2;
