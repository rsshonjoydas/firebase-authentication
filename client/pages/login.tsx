import { ErrorMessage, Form, Formik } from 'formik';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import * as Yup from 'yup';
import LoginSocial from '../components/auth/LoginSocial';
import Button from '../components/Button/Button';
import FormikControl from '../components/Form/FormikControl';
import PasswordInput from '../components/Form/PasswordInput';
import TextError from '../components/Form/TextError';
import { ILogin } from '../interface/authTypes';
import { useAppDispatch } from '../redux/hooks';
import { authLogin } from '../redux/slice/authSlice';

// TODO: Formik Auth initial value
const InitialValues = {
  email: '',
  password: '',
};

// TODO: Formik Login validation schema
const Schema = Yup.object().shape({
  email: Yup.string().email('Invalid email.').required('The email is required.'),
  password: Yup.string().required('The password is required.').min(8, 'The password is too short.'),
});

const Login = () => {
  const [remember, setRemember] = useState(false);

  const router = useRouter();
  const dispatch = useAppDispatch();

  const handleSubmit = async (values: ILogin) => {
    const { email, password } = values;

    dispatch(authLogin({ email, password, remember, router }));
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-600 antialiased px-4 py-12 flex items-center flex-col justify-center sm:px-6 lg:px-8">
      <div className="relative py-3 sm:max-w-xl mx-auto">
        <div className="text-2xl my-2 text-center">Login to your account</div>
        <Formik initialValues={InitialValues} validationSchema={Schema} onSubmit={handleSubmit}>
          {({ values, handleChange }) => (
            <Form className="relative lg:w-96 md:w-96 sm:w-80 mt-4 bg-white shadow-md sm:rounded-lg text-left">
              <div className="h-2 bg-indigo-400 rounded-t-md" />
              <div className="py-6 px-8 text-gray-500">
                {/* // ? Username & Password Field */}
                <label
                  htmlFor="username"
                  className="block mt-3 after:content-['*'] after:ml-0.5 after:text-red-500"
                >
                  Username or Email
                </label>
                <FormikControl
                  control="input"
                  placeholder="Username or Email"
                  type="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                />
                <PasswordInput
                  label="Password"
                  name="password"
                  placeholder="Password"
                  values={values.password}
                  onChange={handleChange}
                />
                <ErrorMessage name="password" component={TextError} />
                <div className="flex items-center mt-2">
                  <input
                    type="checkbox"
                    id="rb-me"
                    className="w-4 h-4"
                    checked={remember}
                    onChange={() => setRemember(!remember)}
                  />
                  <label
                    htmlFor="rb-me"
                    className="block ml-2 text-sm text-gray-900 cursor-pointer"
                  >
                    Remember me
                  </label>
                </div>
                {/* // ? Submit button & Forget password Field */}
                <div className="flex justify-between items-center">
                  <Button type="submit">Login</Button>
                  <a href="/forgot-password" className="text-sm hover:underline ml-8">
                    Forgot password?
                  </a>
                </div>
                <LoginSocial />
                {/* // ? Toggle Login & Sign Up button */}
                <div className="flex justify-center items-center">
                  <Link href="/register">Don&prime;t have an account? Sign Up</Link>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Login;
