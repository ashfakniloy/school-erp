import * as Yup from "yup";
import { Formik, Form } from "formik";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { TextField, TextArea, SelectField } from "../../common/InputField";
import { API_URL } from "../../../config";
import usePostData from "../../Hooks/usePostData";

function ExpenseForm() {
  const initialvalues = {
    name: "",
    id_no: "",
    expense_type: "",
    amount: "",
    phone: "",
    email: "",
    status: "",
    date: "",
  };

  const validate = Yup.object({
    name: Yup.string().required("Name is required"),
    id_no: Yup.string().required("ID No is required"),
    expense_type: Yup.string().required("Expense type is required"),
    amount: Yup.string().required("Amount is required"),
    phone: Yup.string().required("Phone is required"),
    email: Yup.string().required("Email is required"),
    status: Yup.string().required("Status is required"),
    date: Yup.string().required("Date is required"),
  });

  // const handleSubmit = (values, formik) => {
  //   console.log("add expense data", values);
  // };

  const { postData } = usePostData("/expense/add");

  const handleSubmit = (values, formik) => {
    postData(values, formik);
  };

  // const handleSubmit = async (values, formik) => {
  //   const res = await fetch(`${API_URL}/expense/add`, {
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
              Add New Expense
            </h1>
            <div className="form">
              <TextField label="Name *" name="name" type="text" />
              <TextField label="ID No *" name="id_no" type="number" />
              <TextField
                label="Expense Type *"
                name="expense_type"
                type="text"
              />
              <TextField label="Amount *" name="amount" type="number" />
              <TextField label="Phone *" name="phone" type="text" />
              <TextField label="Email *" name="email" type="email" />
              <SelectField
                label="Status *"
                name="status"
                type="text"
                placeholder="Select Status"
                options={["Paid", "Due", "Others"]}
              />
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

export default ExpenseForm;
