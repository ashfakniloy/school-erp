import React from "react";
import FeeForm from "../../../components/Admin/Form/FeeForm";
import Layout from "../../../components/Admin/Layout";

function AddNewClasses() {
  return (
    <Layout>
      <div className="px-8 py-10 ">
        <h1 className="text-xl font-semibold text-slate-800">Accounting</h1>
        <div className="mt-8">
          <FeeForm />
        </div>
      </div>
    </Layout>
  );
}

export default AddNewClasses;
