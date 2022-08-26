import * as Yup from "yup";
import { Formik, Form } from "formik";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { TextField } from "../../common/InputField";

import usePostData from "../../Hooks/usePostData";

function BookForm() {
  const initialvalues = {
    book_name: "",
    subject: "",
    writer_name: "",
    class: "",
    book_id: "",
    publish_date: "",
    upload_date: "",
  };

  const validate = Yup.object({
    book_name: Yup.string().required("Book Name is required"),
    subject: Yup.string().required("Subject is required"),
    writer_name: Yup.string().required("Writer name is required"),
    class: Yup.string().required("Class is required"),
    book_id: Yup.string().required("Book ID is required"),
    publish_date: Yup.string().required("Publish Date is required"),
    upload_date: Yup.string().required("Upload Date is required"),
  });

  const { postData } = usePostData("/library/add");

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
              Add New Book
            </h1>
            <div className="form">
              <TextField label="Book Name *" name="book_name" type="text" />
              <TextField label="Subject *" name="subject" type="text" />
              <TextField label="Writer Name *" name="writer_name" type="text" />
              <TextField label="Class *" name="class" type="text" />
              <TextField label="Book ID *" name="book_id" type="number" />
              <TextField
                label="Publish Date *"
                name="publish_date"
                type="date"
              />
              <TextField label="Upload Date *" name="upload_date" type="date" />
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

export default BookForm;
