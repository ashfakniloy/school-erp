import React from "react";
import ExpenseForm from "../../../components/Admin/Form/ExpenseForm";
import Layout from "../../../components/Admin/Layout";

function AddExpense() {
  return (
    <Layout>
      <div className="px-8 py-10 ">
        <h1 className="text-xl font-semibold text-slate-800">Accounting</h1>
        <div className="mt-8">
          <ExpenseForm />
        </div>
      </div>
    </Layout>
  );
}

export default AddExpense;
