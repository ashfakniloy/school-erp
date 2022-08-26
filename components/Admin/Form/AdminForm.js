import * as Yup from "yup";
import { Formik, Form } from "formik";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { TextField, TextArea, SelectField } from "../../common/InputField";
import { TextField, TextArea, SelectField } from "../../common/InputField";
import { API_URL } from "../../../config";
import usePostData from "../../Hooks/usePostData";

function AdminForm() {
  const initialvalues = {
    first_name: "",
    last_name: "",
    user_name: "",
    // user_type: "",
    gender: "",
    // fathers_name: "",
    // mothers_name: "",
    // date_of_birth: "",
    // religion: "",
    joining_date: "",
    email: "",
    // subject: "",
    // class: "",
    // section: "",
    // id_no: "",
    phone: "",
    address: "",
  };

  const validate = Yup.object({
    first_name: Yup.string().required("First name is required"),
    last_name: Yup.string().required("Last name is required"),
    user_name: Yup.string().required("User name is required"),
    // user_type: Yup.string().required("User Type is required"),
    gender: Yup.string().required("Gender is required"),
    // fathers_name: Yup.string().required("Father's Name is required"),
    // mothers_name: Yup.string().required("Mother's Name is required"),
    // date_of_birth: Yup.string().required("Birthdate is required"),
    // religion: Yup.string().required("Religion is required"),
    joining_date: Yup.string().required("Joining Date is required"),
    email: Yup.string().required("Email is required"),
    // subject: Yup.string().required("Subject is required"),
    // class: Yup.string().required("Class is required"),
    // section: Yup.string().required("Section is required"),
    // id_no: Yup.string().required("ID number is required"),
    phone: Yup.string().required("Phone is required"),
    address: Yup.string().required("Address is required"),
  });

  // const handleSubmit = (values, formik) => {
  //   console.log("Form data", values);
  // };

  const { postData } = usePostData("/admin_user/add");

  const handleSubmit = (values, formik) => {
    postData(values, formik);
  };

  // const handleSubmit = async (values, formik) => {
  //   const res = await fetch(`${API_URL}/admin_user/add`, {
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
              Add New Admin
            </h1>
            <div className="form">
              <TextField label="First Name *" name="first_name" type="text" />
              <TextField label="Last Name *" name="last_name" type="text" />
              <TextField label="User Name *" name="user_name" type="text" />
              {/* <SelectField
                label="User Type *"
                name="user_type"
                type="text"
                placeholder="Select User Type"
                options={["Super Admin", "Admin", "User"]}
              /> */}
              <SelectField
                label="Gender *"
                name="gender"
                type="text"
                placeholder="Select Gender"
                options={["Male", "Female"]}
              />
              {/* <TextField
                label="Father's Name *"
                name="fathers_name"
                type="text"
              />
              <TextField
                label="Mother's Name *"
                name="mothers_name"
                type="text"
              />
              <TextField
                label="Date of Birth *"
                name="date_of_birth"
                type="date"
              />
              <SelectField
                label="Religion *"
                name="religion"
                type="text"
                placeholder="Select Religion"
                options={["Islam", "Hindu", "Christian", "Buddhist", "Others"]}
              /> */}
              <TextField
                label="Joining Date *"
                name="joining_date"
                type="date"
              />
              <TextField label="Email *" name="email" type="email" />
              {/* <TextField label="Subject *" name="subject" type="text" />
              <TextField label="Class *" name="class" type="text" />
              <TextField label="Section *" name="section" type="text" /> */}
              {/* <TextField label="ID No *" name="id_no" type="number" /> */}
              {/* <SelectField
                label="Blood Group *"
                name="blood_group"
                type="text"
                placeholder="Select Blood Group"
                options={["A+", "A-", "B+", "B-", "O+", "O-"]}
              /> */}
              <TextField label="Phone *" name="phone" type="number" />
              <TextField label="Address *" name="address" type="text" />
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

export default AdminForm;
