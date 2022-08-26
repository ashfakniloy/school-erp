import * as Yup from "yup";
import { Formik, Form } from "formik";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { TextField, TextArea, SelectField } from "../../common/InputField";
import { API_URL } from "../../../config";

function LeaveForm() {
  const initialvalues = {
    leave_name: "",
    select_class: "",
    select_section: "",
    select_date: "",
  };

  const validate = Yup.object({
    leave_name: Yup.string().required("leave Name is required"),
    select_class: Yup.string().required("Class is required"),
    select_section: Yup.string().required("Section is required"),
    select_date: Yup.string().required("Date is required"),
  });

  const handleSubmit = (values, formik) => {
    console.log("add leave data", values);
  };

  // const handleSubmit = async (values, formik) => {
  //   const res = await fetch(`${API_URL}/leave/add`, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(values),
  //   });
  //   const data = await res.json();

  //   if (res.ok) {
  //     toast.success("Form Submitted Successfully!");
  //     console.log(data);
  //     // formik.resetForm();
  //   } else {
  //     console.log("error", data);
  //     toast.error(data.message);
  //   }
  // };

  return (
    <div className="mt-14 bg-white p-10 shadow-md">
      <Formik
        initialValues={initialvalues}
        validationSchema={validate}
        onSubmit={handleSubmit}
      >
        {(formik) => (
          <Form>
            <ToastContainer />
            <h1 className="text-xl font-semibold text-slate-800">
              Add New leave
            </h1>
            <div className="form">
              <TextField label="Name *" name="leave_name" type="text" />
              <TextField label="Class *" name="select_class" type="text" />
              <TextField
                label="Select Section *"
                name="select_section"
                type="text"
              />
              <TextField label="Date *" name="select_date" type="date" />
            </div>

            <button type="submit" className="submit_button">
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default LeaveForm;
