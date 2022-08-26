import { useState } from "react";
import IndividualEmailForm from "./IndividualEmailForm";
import AllEmailForm from "./AllEmailForm";
import TeachersEmailForm from "./TeachersEmailForm";
import StudentsEmailForm from "./StudentsEmailForm";
// import StudentsClassEmailForm from "./StudentsClassEmailForm";
import StudentsClassAndSectionEmailForm from "./StudentsClassAndSectionEmailForm";
import ParentsEmailForm from "./ParentsEmailForm";
import ParentsClassAndSectionEmailForm from "./ParentsClassAndSectionEmailForm";

function EmailForm() {
  const [selectedValue, setSelectedValue] = useState("individual");

  const handleChange = (value) => {
    setSelectedValue(value);
  };

  return (
    <div className="mt-14 bg-white p-10 shadow-md">
      <h1 className="text-xl font-semibold text-slate-800">Send Email</h1>

      <label htmlFor="email" className="mr-2">
        Send Email To:
      </label>

      <select
        className="mt-8 p-2 outline-none border border-slate-500 text-sm"
        name="email"
        id="email"
        value={selectedValue}
        onChange={(e) => handleChange(e.target.value)}
      >
        <option value="individual">Individual</option>
        <option value="all teachers">All Teachers</option>
        <option value="all students">All Students</option>
        <option value="all parents">All Parents</option>
        {/* <option value="students class">Students By Class</option> */}
        <option value="students class and section">
          Students By Class and Section
        </option>
        <option value="parents class and section">
          Parents By Class and Section
        </option>
        <option value="all users">All Users</option>
      </select>

      {selectedValue === "individual" && <IndividualEmailForm />}
      {selectedValue === "all teachers" && <TeachersEmailForm />}
      {selectedValue === "all students" && <StudentsEmailForm />}
      {selectedValue === "all parents" && <ParentsEmailForm />}
      {/* {selectedValue === "students class" && <StudentsClassEmailForm />} */}
      {selectedValue === "students class and section" && (
        <StudentsClassAndSectionEmailForm />
      )}
      {selectedValue === "parents class and section" && (
        <ParentsClassAndSectionEmailForm />
      )}
      {selectedValue === "all users" && <AllEmailForm />}
    </div>
  );
}

export default EmailForm;
