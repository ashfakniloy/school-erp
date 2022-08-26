import { useState } from "react";
import { format, formatDistance } from "date-fns";
import { enUS } from "date-fns/locale";

// const notices = [
//   {
//     id: 0,
//     date: "16 June, 2019",
//     title: "Great School manag mene esom text of the printing.",
//     author: "Jennyfar Lopez",
//   },
//   {
//     id: 1,
//     date: "16 June, 2019",
//     title: "Great School manag mene esom text of the printing.",
//     author: "Jennyfar Lopez",
//   },
//   {
//     id: 2,
//     date: "16 June, 2019",
//     title: "Great School manag mene esom text of the printing.",
//     author: "Jennyfar Lopez",
//   },
//   {
//     id: 3,
//     date: "16 June, 2019",
//     title: "Great School manag mene esom text of the printing.",
//     author: "Jennyfar Lopez",
//   },
//   {
//     id: 4,
//     date: "16 June, 2019",
//     title: "Great School manag mene esom text of the printing.",
//     author: "Jennyfar Lopez",
//   },
//   {
//     id: 5,
//     date: "16 June, 2019",
//     title: "Great School manag mene esom text of the printing.",
//     author: "Jennyfar Lopez",
//   },
// ];

function NoticeBoard({ notices }) {
  const [showNotice, setShowNotice] = useState("");

  const toggle = (index) => {
    if (showNotice === index) {
      return setShowNotice(null);
    }

    setShowNotice(index);
  };

  return (
    <div className="bg-gradient-to-t from-teal-400 to-teal-100 p-5 shadow-lg">
      <h1 className="my-5 text-xl">Notice Board</h1>

      <div className="m-3 overflow-y-scroll notice  h-[400px]">
        <div className="my-4 ">
          {notices &&
            notices.map((notice) => (
              <div
                key={notice.id}
                className="my-8 mr-5 border-b border-slate-200"
              >
                <span className="bg-slate-400  text-white text-xs py-2 px-5 rounded-full">
                  {format(new Date(notice.post_date), "dd MMM, yyyy", {
                    locale: enUS,
                  })}
                </span>
                <p className="mt-4 mb-2 font-semibold">{notice.title}</p>
                <div
                  className="my-2 text-xs cursor-pointer"
                  onClick={() => toggle(notice.id)}
                >
                  {showNotice === notice.id ? (
                    <p className="">Hide Details</p>
                  ) : (
                    <p className="">Show Details</p>
                  )}
                </div>
                {showNotice === notice.id && (
                  <p className="my-2 text-sm">{notice.details}</p>
                )}
                <p className="mb-4 text-sm text-slate-600">
                  {notice.posted_by}{" "}
                  <span className="text-slate-400 text-xs mr-1">/</span>
                  <span className="text-slate-400 text-xs">
                    {formatDistance(new Date(notice.created_at), new Date(), {
                      addSuffix: true,
                    })}
                  </span>
                </p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default NoticeBoard;
