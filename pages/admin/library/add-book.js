import React from "react";
import BookForm from "../../../components/Admin/Form/BookForm";
import Layout from "../../../components/Admin/Layout";

function AddBookPage() {
  return (
    <Layout>
      <div className="px-8 py-10 ">
        <h1 className="text-xl font-semibold text-slate-800">Library</h1>
        <div className="mt-8">
          <BookForm />
        </div>
      </div>
    </Layout>
  );
}

export default AddBookPage;
