import { useRouter } from "next/router";
import { FaExclamationTriangle } from "react-icons/fa";
// import Layout from "../components/Layout";

function NotFoundPage() {
  const router = useRouter();

  return (
    <div className="px-8 py-10 mx-40">
      <h1 className="text-xl font-semibold text-slate-800">Page Not Found</h1>
      <div className="mt-8 ">
        <div className="mt-14 flex flex-col justify-center items-center bg-white p-60 shadow-md">
          <div className="flex justify-center items-center gap-4 text-5xl font-semibold">
            <FaExclamationTriangle /> <h1>404</h1>
          </div>
          <h3 className="mt-8 text-lg font-semibold">
            Sorry, there is nothing here.
          </h3>
          <h3
            className="mt-4 text-sm cursor-pointer"
            onClick={() => router.back()}
          >
            Go back
          </h3>
        </div>
      </div>
    </div>
  );
}

export default NotFoundPage;
