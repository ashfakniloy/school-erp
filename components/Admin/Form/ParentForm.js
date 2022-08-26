import * as Yup from "yup";
import { Formik, Form } from "formik";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { TextField, TextArea, SelectField } from "../../common/InputField";
import { API_URL, token, schoolId } from "../../../config";
import { useSelector } from "react-redux";
import usePostData from "../../Hooks/usePostData";

function ParentForm() {
  const initialvalues = {
    first_name: "",
    last_name: "",
    gender: "",
    date_of_birth: "",
    // id_no: "",
    blood_group: "",
    religion: "",
    occupation: "",
    student_email: "",
    email: "",
    // class: "",
    // section: "",
    phone: "",
    address: "",
    bio: "",
  };

  const validate = Yup.object({
    first_name: Yup.string().required("First name is required"),
    last_name: Yup.string().required("Last name is required"),
    gender: Yup.string().required("Gender is required"),
    date_of_birth: Yup.string().required("BirthDate is required"),
    // id_no: Yup.string().required("ID number is required"),
    blood_group: Yup.string().required("Blood Group is required"),
    religion: Yup.string().required("Religion is required"),
    occupation: Yup.string().required("Occupation is required"),
    student_email: Yup.string().required("Student Email is required"),
    email: Yup.string().required("Email is required"),
    // class: Yup.string().required("Class is required"),
    // section: Yup.string().required("Section is required"),
    phone: Yup.string().required("Phone is required"),
    address: Yup.string().required("Address is required"),
    bio: Yup.string().required("Bio is required"),
  });

  // const handleSubmit = (values, formik) => {
  //   console.log("parent data", values);
  // };

  // const { token, userId } = useSelector((state) => state.login);

  const { postData } = usePostData("/parent/signup");

  const handleSubmit = (values, formik) => {
    postData(values, formik);
  };

  // const handleSubmit = async (values, formik) => {
  //   const res = await fetch(`${API_URL}/parent/signup/${schoolId}`, {
  //     method: "POST",
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json",
  //       Authorization: `Bearer ${token}`,
  //     },
  //     body: JSON.stringify(values),
  //   });
  //   const data = await res.json();

  //   console.log(token);

  //   if (res.ok) {
  //     toast.success("Form Submitted Successfully!");
  //     console.log(data.data);
  //     // formik.resetForm();
  //   } else {
  //     console.log("error", data.message);
  //     toast.error(data.data);
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
              Add New Parent
            </h1>
            <div className="form">
              <TextField label="First Name *" name="first_name" type="text" />
              <TextField label="Last Name *" name="last_name" type="text" />
              <SelectField
                label="Gender *"
                name="gender"
                type="text"
                placeholder="Select Gender"
                options={["Male", "Female"]}
              />
              <TextField
                label="Date of Birth *"
                name="date_of_birth"
                type="date"
              />
              {/* <TextField label="ID No *" name="id_no" type="number" /> */}
              <SelectField
                label="Blood Group *"
                name="blood_group"
                type="text"
                placeholder="Select Blood Group"
                options={["A+", "A-", "B+", "B-", "O+", "O-"]}
              />
              <SelectField
                label="Religion *"
                name="religion"
                type="text"
                placeholder="Select Religion"
                options={["Islam", "Hindu", "Christian", "Buddhist", "Others"]}
              />
              <TextField label="Occupation *" name="occupation" type="text" />
              <TextField
                label="Student Email *"
                name="student_email"
                type="email"
              />
              <TextField label="Email *" name="email" type="email" />
              {/* <TextField label="Class *" name="class" type="text" />
              <TextField label="Section *" name="section" type="text" /> */}
              <TextField label="Phone *" name="phone" type="number" />
              <TextField label="Address *" name="address" type="text" />
              <TextArea label="Short Bio *" name="bio" type="text" />
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

export default ParentForm;
