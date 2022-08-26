import React from "react";
import TransportForm from "../../../components/Admin/Form/TransportForm";
import Layout from "../../../components/Admin/Layout";

function AddTransportPage() {
  return (
    <Layout>
      <div className="px-8 py-10 ">
        <h1 className="text-xl font-semibold text-slate-800">Transport</h1>
        <div className="mt-8">
          <TransportForm />
        </div>
      </div>
    </Layout>
  );
}

export default AddTransportPage;
