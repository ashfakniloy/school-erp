import React from "react";
import BillForm from "../../../components/Admin/Form/BillForm";
import Layout from "../../../components/Admin/Layout";

function AddNewClasses() {
  return (
    <Layout>
      <div className="px-8 py-10 ">
        <h1 className="text-xl font-semibold text-slate-800">Billing</h1>
        <div className="mt-8">
          <BillForm />
        </div>
      </div>
    </Layout>
  );
}

export default AddNewClasses;
