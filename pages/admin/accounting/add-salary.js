import React from "react";
import SalaryForm from "../../../components/Admin/Form/SalaryForm";
import Layout from "../../../components/Admin/Layout";

function AddSalaryPage() {
  return (
    <Layout>
      <div className="px-8 py-10 ">
        <h1 className="text-xl font-semibold text-slate-800">Accounting</h1>
        <div className="mt-8">
          <SalaryForm />
        </div>
      </div>
    </Layout>
  );
}

export default AddSalaryPage;
