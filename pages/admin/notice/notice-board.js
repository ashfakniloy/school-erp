import { useState, useEffect } from "react";
import NoticeBoard from "../../../components/Admin/NoticeBoard";
import useGetData from "../../../components/Hooks/useGetData";
import Layout from "../../../components/Admin/Layout";
import { API_URL } from "../../../config";

function NoticesPage() {
  const [notices, setNotices] = useState([]);

  const { fetchedData } = useGetData("notice/all");

  // useEffect(() => {
  //   const getData = async () => {
  //     const res = await fetch(`${API_URL}/notice/all`, {
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     });
  //     const data = await res.json();
  //     setNotices(data.notice);
  //   };
  //   getData();
  // }, [setNotices]);

  return (
    <Layout>
      <div className="px-8 py-10 ">
        <h1 className="text-xl font-semibold text-slate-800">Notice</h1>
        <div className="mt-8">
          {fetchedData && <NoticeBoard notices={fetchedData} />}
        </div>
      </div>
    </Layout>
  );
}

export default NoticesPage;
