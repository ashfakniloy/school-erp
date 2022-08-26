import * as Yup from "yup";
import { Formik, Form } from "formik";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { TextField, TextArea, SelectField } from "../../common/InputField";
import { API_URL } from "../../../config";
import usePostData from "../../Hooks/usePostData";

function AddSubjectForm() {
  const initialvalues = {
    subject_name: "",
    subject_type: "",
    select_class: "",
    select_code: "",
  };

  const validate = Yup.object({
    subject_name: Yup.string().required("Subject Name is required"),
    subject_type: Yup.string().required("Subject Type is required"),
    select_class: Yup.string().required("Class is required"),
    select_code: Yup.string().required("Code is required"),
  });

  // const handleSubmit = (values, formik) => {
  //   console.log("add subject data", values);
  // };

  const { postData } = usePostData("/subject/add");

  const handleSubmit = (values, formik) => {
    postData(values, formik);
  };

  // const handleSubmit = async (values, formik) => {
  //   const res = await fetch(`${API_URL}/subject/add`, {
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
              Add New Subject
            </h1>
            <div className="form">
              <TextField
                label="Subject Name *"
                name="subject_name"
                type="text"
              />
              <TextField
                label="Subject Type *"
                name="subject_type"
                type="text"
              />
              <TextField
                label="Select Class *"
                name="select_class"
                type="text"
              />
              <TextField
                label="Select Code *"
                name="select_code"
                type="number"
              />
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

export default AddSubjectForm;
