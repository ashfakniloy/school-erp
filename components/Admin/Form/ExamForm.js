import * as Yup from "yup";
import { Formik, Form } from "formik";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { TextField } from "../../common/InputField";

import usePostData from "../../Hooks/usePostData";

function ExamForm() {
  const initialvalues = {
    exam_name: "",
    subject_type: "",
    select_class: "",
    select_section: "",
    select_time: "",
    select_date: "",
  };

  const validate = Yup.object({
    exam_name: Yup.string().required("Exam Name is required"),
    subject_type: Yup.string().required("Subject Type is required"),
    select_class: Yup.string().required("Class is required"),
    select_section: Yup.string().required("Section is required"),
    select_time: Yup.string().required("Time is required"),
    select_date: Yup.string().required("Date is required"),
  });

  const { postData } = usePostData("/exam/add");

  const handleSubmit = (values, formik) => {
    postData(values, formik);
  };

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
              Add New Exam
            </h1>
            <div className="form">
              <TextField label="Name *" name="exam_name" type="text" />
              <TextField
                label="Subject Type *"
                name="subject_type"
                type="text"
              />
              <TextField label="Class *" name="select_class" type="text" />
              <TextField
                label="Select Section *"
                name="select_section"
                type="text"
              />
              <TextField label="Time *" name="select_time" type="text" />
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

export default ExamForm;
