import * as Yup from "yup";
import { Formik, Form } from "formik";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { TextField, TextArea, SelectField } from "../../common/InputField";
import { API_URL } from "../../../config";
import usePostData from "../../Hooks/usePostData";

function NoticeForm() {
  const initialvalues = {
    title: "",
    details: "",
    posted_by: "",
    post_date: "",
  };

  const validate = Yup.object({
    title: Yup.string().required("Title is required"),
    details: Yup.string().required("Details is required"),
    posted_by: Yup.string().required("Posted By is required"),
    post_date: Yup.string().required("Date is required"),
  });

  // const handleSubmit = (values, formik) => {
  //   console.log("add notice data", values);
  // };

  const { postData } = usePostData("/notice/add");

  const handleSubmit = (values, formik) => {
    postData(values, formik);
  };

  // const handleSubmit = async (values, formik) => {
  //   const res = await fetch(`${API_URL}/notice/add`, {
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
              Add New Notice
            </h1>
            <div className="form">
              <TextField label="Title *" name="title" type="text" />
              <TextField label="Details *" name="details" type="text" />
              <TextField label="Posted By *" name="posted_by" type="text" />
              <TextField label="Date *" name="post_date" type="date" />
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

export default NoticeForm;
