import * as Yup from "yup";
import { Formik, Form } from "formik";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { TextField, TextArea, SelectField } from "../../common/InputField";
import { API_URL } from "../../../config";
import usePostData from "../../Hooks/usePostData";

function FeeForm() {
  const initialvalues = {
    class: "",
    section: "",
    fee_name: "",
    fee_amount: "",
    fee_type: "",
    starts_from: "",
    finishes_at: "",
  };

  const validate = Yup.object({
    class: Yup.string().required("Class is required"),
    section: Yup.string().required("Section is required"),
    fee_name: Yup.string().required("Fee Name is required"),
    fee_amount: Yup.string().required("Fee Amount is required"),
    fee_type: Yup.string().required("Fee Type is required"),
    starts_from: Yup.string().required("Starts From is required"),
    finishes_at: Yup.string().required("Finishes At is required"),
  });

  // const handleSubmit = (values, formik) => {
  //   console.log("add fee data", values);
  // };

  const { postData } = usePostData("/fee/add");

  const handleSubmit = (values, formik) => {
    postData(values, formik);
  };

  // const handleSubmit = async (values, formik) => {
  //   const res = await fetch(`${API_URL}/fee/add`, {
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
              Add New fee
            </h1>
            <div className="form">
              <TextField label="Class *" name="class" type="text" />
              <TextField label="Section *" name="section" type="text" />
              <TextField label="Fee Name *" name="fee_name" type="text" />
              <TextField label="Fee Amount *" name="fee_amount" type="number" />
              <TextField label="Fee Type *" name="fee_type" type="text" />
              <TextField label="Starts From *" name="starts_from" type="date" />
              <TextField label="Finishes At *" name="finishes_at" type="date" />
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

export default FeeForm;
