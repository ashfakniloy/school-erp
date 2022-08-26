import React from "react";
import RoomForm from "../../../components/Admin/Form/RoomForm";
import Layout from "../../../components/Admin/Layout";

function AddNewRoom() {
  return (
    <Layout>
      <div className="px-8 py-10 ">
        <h1 className="text-xl font-semibold text-slate-800">Hostel</h1>
        <div className="mt-8">
          <RoomForm />
        </div>
      </div>
    </Layout>
  );
}

export default AddNewRoom;
