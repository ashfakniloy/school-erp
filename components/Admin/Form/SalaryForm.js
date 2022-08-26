import * as Yup from "yup";
import { Formik, Form } from "formik";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { TextField, TextArea, SelectField } from "../../common/InputField";
import { API_URL } from "../../../config";
import usePostData from "../../Hooks/usePostData";

function SalaryForm() {
  const initialvalues = {
    staff_id: "",
    name: "",
    gender: "",
    month: "",
    amount: "",
    email: "",
  };

  const validate = Yup.object({
    staff_id: Yup.string().required("Staff ID Name is required"),
    name: Yup.string().required("Name Type is required"),
    gender: Yup.string().required("Gender is required"),
    month: Yup.string().required("Month is required"),
    amount: Yup.string().required("Amount is required"),
    email: Yup.string().required("Email is required"),
  });

  // const handleSubmit = (values, formik) => {
  //   console.log("add salary data", values);
  // };

  const { postData } = usePostData("/salary/add");

  const handleSubmit = (values, formik) => {
    postData(values, formik);
  };

  // const handleSubmit = async (values, formik) => {
  //   const res = await fetch(`${API_URL}/salary/add`, {
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
              Add New Salary
            </h1>
            <div className="form">
              <TextField label="Staff ID *" name="staff_id" type="text" />
              <TextField label="Name *" name="name" type="text" />
              <SelectField
                label="Gender *"
                name="gender"
                type="text"
                placeholder="Select Gender"
                options={["Male", "Female"]}
              />
              <SelectField
                label="Month *"
                name="month"
                type="text"
                placeholder="Select Month"
                options={[
                  "January",
                  "February",
                  "March",
                  "April",
                  "May",
                  "June",
                  "July",
                  "August",
                  "September",
                  "October",
                  "November",
                  "December",
                ]}
              />
              <TextField label="Amount *" name="amount" type="number" />
              <TextField label="Email *" name="email" type="email" />
              {/* 
                <SelectField
                  label="Status *"
                  name="status"
                  type="text"
                  placeholder="Select Status"
                  options={["Paid", "Due", "Others"]}
                />
              </div> */}
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

export default SalaryForm;
