import React from "react";
import StudentForm from "../../../components/Admin/Form/StudentForm";
import Layout from "../../../components/Admin/Layout";

function AdmissionFormPage() {
  return (
    <Layout>
      <div className="bg-gray-100 px-8 py-10 ">
        <h1 className="text-xl font-semibold text-slate-800">Students</h1>
        <div className="mt-8">
          <StudentForm />
        </div>
      </div>
    </Layout>
  );
}

export default AdmissionFormPage;
