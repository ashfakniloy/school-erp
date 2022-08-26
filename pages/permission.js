import { useState } from "react";
import { TextField } from "../components/common/InputField";
import { API_URL } from "../config";

import { Formik, Form } from "formik";

function PermissionPage() {
  // const [email, setEmail] = useState("");
  const [fetchedData, setFetchedData] = useState({});

  const initialvalues = {
    identity_id: "",
    email: "",
    // password: "",
  };

  // const validate = Yup.object({
  //   email: Yup.string().required("Email is required"),
  //   password: Yup.string().required("Password is required"),
  // });

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(email);
  // };

  const handleSubmit = async (values) => {
    const res = await fetch(`${API_URL}/admin_login/permission`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });

    const data = await res.json();

    if (res.ok) {
      setFetchedData(data);
      console.log(data);
    } else {
      console.log(data.message);
    }
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  // const res = await fetch(`${API_URL}/admin_login/permission`, {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify(email),
  // });

  // const data = await res.json();

  // if (res.ok) {
  //   setFetchedData(data);
  //   console.log(fetchedData);
  // } else {
  //   console.log(data.message);
  // }
  // };

  return (
    <>
      <div className="flex justify-center items-center pt-28">
        <Formik
          initialValues={initialvalues}
          // validationSchema={validate}
          onSubmit={handleSubmit}
        >
          {(formik) => (
            <Form className="space-y-4">
              <TextField label="School Code *" name="identity_id" type="text" />
              <TextField label="Email *" name="email" type="email" />
              <button
                type="submit"
                className="mt-2 px-4 py-2 bg-teal-300 text-sm"
              >
                Send
              </button>
            </Form>
          )}
        </Formik>

        {/* <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="outline-none border-2 p-1 w-[300px]"
        />
        <button type="submit" className="px-4 py-2 bg-slate-300 text-sm">
          Send
        </button>
      </form> */}
      </div>
      <div className="flex flex-col mt-10 items-center justify-center">
        <p>Email: {fetchedData.email}</p>
        <p>Password: {fetchedData.password}</p>
      </div>
    </>
  );
}

export default PermissionPage;
