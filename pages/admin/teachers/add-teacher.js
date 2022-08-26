import React from "react";
import Layout from "../../../components/Admin/Layout";
import TeacherForm from "../../../components/Admin/Form/TeacherForm";

function AddTeacherPage() {
  return (
    <Layout>
      <div className="bg-gray-100 px-8 py-10 ">
        <h1 className="text-xl font-semibold text-slate-800">Teachers</h1>
        <div className="mt-8">
          <TeacherForm />
        </div>
      </div>
    </Layout>
  );
}

export default AddTeacherPage;
