import { ErrorMessage, Field } from "formik";
import Image from "next/image";

// export const TextField = ({ label, ...props }) => {
//   return (
//     <div className="">
//       <label {...props}>{label}</label>
//       <div className="mt-1 relative">
//         <Field
//           className="p-2 w-full outline-none bg-slate-100 border border-slate-300 focus:border-slate-500"
//           {...props}
//         />
//         <p className="absolute -bottom-4 text-red-600 text-xs">
//           <ErrorMessage {...props} />
//         </p>
//       </div>
//     </div>
//   );
// };

export const TextField = ({ label, ...props }) => {
  return (
    <div className="">
      <label {...props}>{label}</label>
      <div className="mt-1 relative">
        <Field
          className="p-2 w-full outline-none bg-slate-100 border border-slate-300 focus:border-slate-500"
          // id={name}
          // name={name}
          {...props}
        />
        <p className="absolute -bottom-4 text-red-600 text-xs">
          <ErrorMessage {...props} />
        </p>
      </div>
    </div>
  );
};

export const TextArea = ({ label, name, ...props }) => {
  return (
    <div className="col-start-1 md:col-end-3">
      <label htmlFor={name}>{label}</label>
      <div className="mt-1 relative">
        <Field
          as="textarea"
          rows="5"
          className="p-2 w-full outline-none bg-slate-100 border border-slate-300 focus:border-slate-500"
          id={name}
          name={name}
          {...props}
        />
        <p className="absolute -bottom-4 text-red-600 text-xs">
          <ErrorMessage name={name} />
        </p>
      </div>
    </div>
  );
};

export const SelectField = ({ label, name, type, placeholder, options }) => {
  return (
    <div className="">
      <label htmlFor={name}>{label}</label>
      <div className="mt-1 relative">
        <Field
          as="select"
          name={name}
          id={name}
          className="p-2 w-full outline-none bg-slate-100 border border-slate-300 focus:border-slate-500"
        >
          <option
            value=""
            className="text-slate-400"
            defaultValue={true}
            hidden
          >
            {placeholder}
          </option>
          {options.map((option, i) => (
            <option key={i} value={option}>
              {option}
            </option>
          ))}
        </Field>
        <p className="absolute -bottom-4 text-red-600 text-xs">
          <ErrorMessage name={name} />
        </p>
      </div>
    </div>
  );
};

export const FileField = ({ label, name, handleChange, imagePreview }) => {
  return (
    <div className="mb-3">
      <div className="relative">
        <label htmlFor="testimonial">{label} </label>
        <input type="file" id={name} className="mt-1" onChange={handleChange} />
        <p className="absolute -bottom-4 text-red-600 text-xs">
          <ErrorMessage name={name} />
        </p>
      </div>
      <div className="mt-2">
        {imagePreview && (
          <Image src={imagePreview} alt={name} width={60} height={60} />
        )}
      </div>
    </div>
  );
};
