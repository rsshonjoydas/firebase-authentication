import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import Button from '../components/Button/Button';
import FormikControl from '../components/Form/FormikControl';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { authForgotPassword } from '../redux/slice/authSlice';

// TODO: Formik Auth initial value
const InitialValues = {
  email: '',
};

// TODO: Formik Login validation schema
const Schema = Yup.object().shape({
  email: Yup.string().email('Invalid email.').required('The email is required.'),
});

const ForgotPassword = () => {
  const dispatch = useAppDispatch();
  const { loading } = useAppSelector((state) => state.auth);

  const handleSubmit = (values: any) => {
    const { email } = values;
    dispatch(authForgotPassword(email));
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
                <div className="flex justify-between items-center">
                  <Button disabled={loading} loading={loading}>
                    Send
                  </Button>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default ForgotPassword;
