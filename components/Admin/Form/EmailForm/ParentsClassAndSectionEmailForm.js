import * as Yup from "yup";
import { Formik, Form } from "formik";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { TextField, TextArea, SelectField } from "../../../common/InputField";
import { API_URL } from "../../../../config";

function ParentsClassAndSectionEmailForm() {
  const initialvalues = {
    email_to: "parents class and section",
    class: "",
    section: "",
    subject: "",
    message: "",
  };

  const validate = Yup.object({
    // email_address: Yup.string().required("Email is required"),
    class: Yup.string().required("Class is required"),
    section: Yup.string().required("Section is required"),
    subject: Yup.string().required("Subject is required"),
    message: Yup.string().required("Message is required"),
  });

  const handleSubmit = (values, formik) => {
    console.log("add email data", values);
  };

  // const handleSubmit = async (values, formik) => {
  //   const res = await fetch(`${API_URL}/exam/add`, {
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
    <div className="mt-12">
      <Formik
        initialValues={initialvalues}
        validationSchema={validate}
        onSubmit={handleSubmit}
      >
        {(formik) => (
          <Form>
            <ToastContainer />
            <div className="grid grid-cols-1 md:grid-cols-4 text-sm gap-x-8 gap-y-5 md:gap-y-7">
              <SelectField
                label="Class *"
                name="class"
                type="text"
                placeholder="Select Class"
                options={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
              />
              <SelectField
                label="Section *"
                name="section"
                type="text"
                placeholder="Select Section"
                options={["All", "A", "B", "C", "D", "E"]}
              />
              <TextField label="Subject *" name="subject" type="text" />
              <TextArea label="Message *" name="message" type="text" />
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

export default ParentsClassAndSectionEmailForm;
