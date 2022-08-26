import * as Yup from "yup";
import { Formik, Form } from "formik";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { TextField, SelectField } from "../../common/InputField";
import usePostData from "../../Hooks/usePostData";

function RoomForm() {
  const initialvalues = {
    hostel_name: "",
    room_number: "",
    room_type: "",
    num_of_bed: "",
    cost_per_bed: "",
  };

  const validate = Yup.object({
    hostel_name: Yup.string().required("Hostel Name is required"),
    room_number: Yup.string().required("Room Number is required"),
    room_type: Yup.string().required("Room Type is required"),
    num_of_bed: Yup.string().required("Number Of Bed is required"),
    cost_per_bed: Yup.string().required("Cost Per Bed is required"),
  });

  const { postData } = usePostData("/hostel/add");

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
              Add New Room
            </h1>
            <div className="form">
              <TextField label="Hostel Name *" name="hostel_name" type="text" />
              <TextField label="Room Number *" name="room_number" type="text" />
              <SelectField
                label="Room Type *"
                name="room_type"
                type="text"
                placeholder="Select Room Type"
                options={["Big", "Medium", "Small"]}
              />
              <SelectField
                label="Number Of Bed *"
                name="num_of_bed"
                type="number"
                placeholder="Select Number Of Bed"
                options={[2, 3, 4, 5]}
              />
              <TextField
                label="Cost Per Bed *"
                name="cost_per_bed"
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

export default RoomForm;
