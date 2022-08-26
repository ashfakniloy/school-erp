import React from "react";
import Layout from "../../components/Admin/Layout";
// import SMSForm from "../../components/Admin/Form/SMSForm";

function AddSMSPage() {
  return (
    <Layout>
      <div className="px-8 py-10 ">
        <h1 className="text-xl font-semibold text-slate-800">SMS</h1>
        <div className="mt-8">
          {/* <SMSForm /> */}
          <h1>SMS page</h1>
        </div>
      </div>
    </Layout>
  );
}

export default AddSMSPage;
