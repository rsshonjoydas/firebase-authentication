import { ErrorMessage, Field } from 'formik';
import TextError from './TextError';

const Input = ({ label, name, ...rest }: any) => (
  <div className="container">
    <label htmlFor={name}>{label}</label>
    <Field
      id={name}
      name={name}
      // className="w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md"
      className="m-1 mb-3 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-indigo-500 block w-full rounded-md sm:text-sm focus:ring-1 peer ..."
      {...rest}
    />
    {name === 'password' ||
    name === 'oldPassword' ||
    name === 'newPassword' ||
    name === 'confirmPassword' ? null : (
      <ErrorMessage name={name} component={TextError} />
    )}
  </div>
);

export default Input;
