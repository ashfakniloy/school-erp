import * as Yup from "yup";
import { Formik, Form } from "formik";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { TextField } from "../../common/InputField";
import usePostData from "../../Hooks/usePostData";

function EarningForm() {
  const initialvalues = {
    name: "",
    amount: "",
    type: "",
    date: "",
  };

  const validate = Yup.object({
    name: Yup.string().required("Name Type is required"),
    amount: Yup.string().required("Amount is required"),
    type: Yup.string().required("Type is required"),
    date: Yup.string().required("Date is required"),
  });

  const { postData } = usePostData("/earning/add");

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
              Add New Earning
            </h1>
            <div className="form">
              <TextField label="Name *" name="name" type="text" />
              <TextField label="Amount *" name="amount" type="number" />
              <TextField label="Type *" name="type" type="text" />
              <TextField label="Date *" name="date" type="date" />
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

export default EarningForm;
