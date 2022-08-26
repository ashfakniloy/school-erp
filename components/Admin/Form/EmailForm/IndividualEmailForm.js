import * as Yup from "yup";
import { Formik, Form } from "formik";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { TextField, TextArea, SelectField } from "../../../common/InputField";
import { useState } from "react";
import { API_URL } from "../../../../config";

function IndividualEmailForm() {
  const [value, setValue] = useState("");

  // const [emailTo, setEmailTo] = useState("");

  // const handleValues = (value) => {
  //   setEmailTo(value);
  //   console.log(value);
  // };

  const initialvalues = {
    email_to: "individual",
    email_address: "",
    subject: "",
    message: "",
  };

  const validate = Yup.object({
    email_address: Yup.string().required("Email is required"),
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
            {/* <h1 className="text-xl font-semibold text-slate-800">Send Email</h1> */}

            <div className="grid grid-cols-1 md:grid-cols-4 text-sm gap-x-8 gap-y-5 md:gap-y-7">
              {/* <div className="col-span-1">
                <SelectField
                  label="Send Email To *"
                  name="email_to"
                  type="text"
                  placeholder="individual"
                  options={["individual", "all users"]}
                />
              </div> */}

              <TextField
                label="Email Address *"
                name="email_address"
                type="email"
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

export default IndividualEmailForm;
