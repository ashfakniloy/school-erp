import React from "react";
import ExamForm from "../../../components/Admin/Form/ExamForm";
import Layout from "../../../components/Admin/Layout";

function AddExamPage() {
  return (
    <Layout>
      <div className="px-8 py-10 ">
        <h1 className="text-xl font-semibold text-slate-800">Exam</h1>
        <div className="mt-8">
          <ExamForm />
        </div>
      </div>
    </Layout>
  );
}

export default AddExamPage;
