import React from "react";
import NoticeForm from "../../../components/Admin/Form/NoticeForm";
import Layout from "../../../components/Admin/Layout";

function AddNewClasses() {
  return (
    <Layout>
      <div className="px-8 py-10 ">
        <h1 className="text-xl font-semibold text-slate-800">Notice</h1>
        <div className="mt-8">
          <NoticeForm />
        </div>
      </div>
    </Layout>
  );
}

export default AddNewClasses;
