import * as Yup from "yup";
import { Formik, Form } from "formik";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { TextField, SelectField } from "../../common/InputField";
import usePostData from "../../Hooks/usePostData";

function BillForm() {
  const initialvalues = {
    teacher_name: "",
    // id_no: "",
    // gender: "",
    amount: "",
    date: "",
    class: "",
    subject: "",
    section: "",
    time: "",
    // phone: "",
    email: "",
  };

  const validate = Yup.object({
    teacher_name: Yup.string().required("Teacher name is required"),
    // id_no: Yup.string().required("ID number is required"),
    // gender: Yup.string().required("Gender is required"),
    class: Yup.string().required("Class is required"),
    subject: Yup.string().required("Subject is required"),
    section: Yup.string().required("Section is required"),
    time: Yup.string().required("Time is required"),
    date: Yup.string().required("Date is required"),
    // phone: Yup.string().required("Phone is required"),
    email: Yup.string().required("Email is required"),
  });

  const { postData } = usePostData("/class_routine/add");

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
              Add New Bill
            </h1>
            <div className="form">
              {/* <TextField
                label="Teacher Name *"
                name="teacher_name"
                type="text"
              /> */}
              {/* <TextField label="ID No *" name="id_no" type="number" />
              <SelectField
                label="Gender *"
                name="gender"
                type="text"
                placeholder="Select Gender"
                options={["Male", "Female"]}
              /> */}
              {/* <TextField label="Class *" name="class" type="text" />
              <TextField label="Subject *" name="subject" type="text" />
              <TextField label="Section *" name="section" type="text" />
              <TextField label="Time *" name="time" type="text" /> */}
              <TextField label="Date *" name="date" type="date" />
              {/* <TextField label="Phone *" name="phone" type="number" /> */}
              <TextField label="Email *" name="email" type="email" />
            </div>

            <div className="mt-8 flex justify-start">
              <button type="submit" className="submit_button">
                Submit
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default BillForm;
