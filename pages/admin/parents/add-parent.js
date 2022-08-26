import React from "react";
import Layout from "../../../components/Admin/Layout";
import ParentForm from "../../../components/Admin/Form/ParentForm";

function AddParentPage() {
  return (
    <Layout>
      <div className="bg-gray-100 px-8 py-10 ">
        <h1 className="text-xl font-semibold text-slate-800">Parents</h1>
        <div className="mt-8">
          <ParentForm />
        </div>
      </div>
    </Layout>
  );
}

export default AddParentPage;
