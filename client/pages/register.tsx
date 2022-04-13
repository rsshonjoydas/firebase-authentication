import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ErrorMessage, Form, Formik } from 'formik';
import Link from 'next/link';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import Button from '../components/Button/Button';
import FormikControl from '../components/Form/FormikControl';
import TextError from '../components/Form/TextError';
import { IRegister } from '../interface/authTypes';
import { authRegister } from '../redux/slice/authSlice';

// TODO: Formik Auth initial value
const InitialValues = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
};

// TODO: Formik Register validation schema
const Schema = Yup.object().shape({
  name: Yup.string()
    .required('Your first name is required.')
    .min(3, 'Too short.')
    .max(25, 'Too long.'),
  email: Yup.string().email('Invalid email.').required('The email is required.'),
  password: Yup.string().required('The password is required.').min(8, 'The password is too short.'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], `Password doesn't match`)
    .required('You need to confirm your password.'),
});

const Register = () => {
  const [passwordShow, setPasswordShow] = useState(false);

  const dispatch = useDispatch();

  const handleSubmit = async (values: IRegister) => {
    const { name, email, password } = values;

    dispatch(authRegister({ name, email, password }));
  };

  const togglePassword = () => {
    setPasswordShow(!passwordShow);
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-600 antialiased px-4 py-12 flex items-center flex-col justify-center sm:px-6 lg:px-8">
      <div className="relative py-3 sm:max-w-xl mx-auto">
        <div className="text-2xl my-2 text-center">Sign Up to new account</div>
        <Formik initialValues={InitialValues} validationSchema={Schema} onSubmit={handleSubmit}>
          {({ values, handleChange }) => (
            <Form className="relative lg:w-96 md:w-96 sm:w-80 mt-4 bg-white shadow-md sm:rounded-lg text-left">
              <div className="h-2 bg-indigo-400 rounded-t-md" />
              <div className="py-6 px-8 text-gray-500">
                <div className="lg:flex lg:justify-between gap-4 mt-3">
                  <div className="col-span-6 sm:w-full">
                    <label
                      htmlFor="name"
                      className="block after:content-['*'] after:ml-0.5 after:text-red-500"
                    >
                      Name
                    </label>
                    <FormikControl
                      control="input"
                      placeholder="Name"
                      type="text"
                      name="name"
                      value={values.name}
                      onChange={handleChange}
                    />
                    <ErrorMessage name="name" component={TextError} />
                  </div>
                </div>
                {/* // ? email & Password Field */}
                <label
                  htmlFor="email"
                  className="block mt-3 after:content-['*'] after:ml-0.5 after:text-red-500"
                >
                  Username or Email
                </label>
                <FormikControl
                  control="input"
                  placeholder="email"
                  type="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                />
                <ErrorMessage name="email" component={TextError} />
                <label
                  htmlFor="password"
                  className="block mt-3 after:content-['*'] after:ml-0.5 after:text-red-500"
                >
                  Password
                </label>
                <div className="flex items-center">
                  <FormikControl
                    control="input"
                    placeholder="Password"
                    name="password"
                    type={passwordShow ? 'text' : 'password'}
                    value={values.password}
                    onChange={handleChange}
                  />
                  <button
                    type="button"
                    onClick={togglePassword}
                    className="w-6 text-gray-400 pb-1 -m-10"
                  >
                    {passwordShow ? (
                      <FontAwesomeIcon icon={faEye} />
                    ) : (
                      <FontAwesomeIcon icon={faEyeSlash} />
                    )}
                  </button>
                </div>
                <ErrorMessage name="password" component={TextError} />
                <label
                  htmlFor="confirmPassword"
                  className="block mt-3 after:content-['*'] after:ml-0.5 after:text-red-500"
                >
                  Confirm Password
                </label>
                <FormikControl
                  control="input"
                  type="password"
                  placeholder="Confirm Password"
                  name="confirmPassword"
                  value={values.confirmPassword}
                  onChange={handleChange}
                />
                <ErrorMessage name="confirmPassword" component={TextError} />
                {/* // ? Submit button & Forget password Field */}
                <div className="flex justify-between items-center">
                  <Button type="submit">Register</Button>
                  <a href="/" className="text-sm hover:underline ml-8">
                    Forgot password?
                  </a>
                </div>
                {/* // ? Toggle Login & Sign Up button */}
                <div className="flex justify-center items-center">
                  <Link href="/login">Already have an account? Login</Link>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Register;
