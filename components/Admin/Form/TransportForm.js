import * as Yup from "yup";
import { Formik, Form } from "formik";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { TextField, TextArea, SelectField } from "../../common/InputField";
import { API_URL } from "../../../config";
import usePostData from "../../Hooks/usePostData";

function TransportForm() {
  const initialvalues = {
    route_name: "",
    vehicle_number: "",
    driver_name: "",
    license_number: "",
    phone_number: "",
  };

  const validate = Yup.object({
    route_name: Yup.string().required("Route Name is required"),
    vehicle_number: Yup.string().required("Vehicle Number is required"),
    driver_name: Yup.string().required("Drier Name is required"),
    license_number: Yup.string().required("License Number is required"),
    phone_number: Yup.string().required("Phone Number is required"),
  });

  // const handleSubmit = (values, formik) => {
  //   console.log("add transport data", values);
  // };

  const { postData } = usePostData("/transport/add");

  const handleSubmit = (values, formik) => {
    postData(values, formik);
  };

  // const handleSubmit = async (values, formik) => {
  //   const res = await fetch(`${API_URL}/transport/add`, {
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
              Add New Transport
            </h1>
            <div className="form">
              <TextField label="Route Name *" name="route_name" type="text" />
              <TextField
                label="Vehicle Number *"
                name="vehicle_number"
                type="number"
              />
              <TextField label="Driver Name *" name="driver_name" type="text" />
              <TextField
                label="License Number *"
                name="license_number"
                type="text"
              />
              <TextField
                label="Phone Number *"
                name="phone_number"
                type="number"
              />
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

export default TransportForm;
