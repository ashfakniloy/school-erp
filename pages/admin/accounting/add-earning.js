import React from "react";
import EarningForm from "../../../components/Admin/Form/EarningForm";
import Layout from "../../../components/Admin/Layout";

function AddEarningPage() {
  return (
    <Layout>
      <div className="px-8 py-10 ">
        <h1 className="text-xl font-semibold text-slate-800">Accounting</h1>
        <div className="mt-8">
          <EarningForm />
        </div>
      </div>
    </Layout>
  );
}

export default AddEarningPage;
