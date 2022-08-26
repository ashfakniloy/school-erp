import React from "react";
import ClassForm from "../../../components/Admin/Form/ClassForm";
import Layout from "../../../components/Admin/Layout";

function AddNewClasses() {
  return (
    <Layout>
      <div className="px-8 py-10 ">
        <h1 className="text-xl font-semibold text-slate-800">Class</h1>
        <div className="mt-8">
          <ClassForm />
        </div>
      </div>
    </Layout>
  );
}

export default AddNewClasses;
