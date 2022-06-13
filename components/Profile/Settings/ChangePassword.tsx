import { ErrorMessage, Form, Formik } from 'formik';
import { useState } from 'react';
import * as Yup from 'yup';
import { useAppSelector } from '../../../redux/hooks';
import { changePassword } from '../../../redux/services/accountServices';
import ButtonPrimary from '../../Button/ButtonPrimary';
import PasswordInput from '../../Form/PasswordInput';
import TextError from '../../Form/TextError';

// TODO: Formik Auth initial value
const InitialValues = {
  oldPassword: '',
  newPassword: '',
  confirmPassword: '',
};

// TODO: Formik Register validation schema
const Schema = Yup.object().shape({
  oldPassword: Yup.string()
    .required('The old password is required.')
    .min(8, 'The password is too short.'),
  newPassword: Yup.string()
    .required('The new password is required.')
    .min(8, 'The password is too short.'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('newPassword'), null], `Password doesn't match`)
    .required('You need to confirm your password.'),
});

const ChangePassword = () => {
  const [loading, setLoading] = useState(false);

  const { currentUser } = useAppSelector((state) => state.auth);

  const handleSubmit = async (values: any) => {
    const { oldPassword, newPassword } = values;
    if (!currentUser || !oldPassword) return;

    setLoading(true);
    await changePassword(currentUser, oldPassword, newPassword);
    setLoading(false);
  };

  if (!currentUser?.providerData.some((p) => p.providerId === 'password')) return null;

  return (
    <>
      <div className="mt-10 sm:mt-0">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-gray-900">Change Password</h3>

              <p className="mt-1 text-sm text-gray-600">
                Function only for Google Account or Email/Password.
              </p>
            </div>
          </div>

          <div className="mt-5 md:mt-0 md:col-span-2">
            <Formik initialValues={InitialValues} validationSchema={Schema} onSubmit={handleSubmit}>
              {({ values, handleChange }) => (
                <Form>
                  <PasswordInput
                    label="Old Password"
                    placeholder="Old Password"
                    name="oldPassword"
                    values={values.oldPassword}
                    onChange={handleChange}
                  />
                  <ErrorMessage name="oldPassword" component={TextError} />
                  <PasswordInput
                    label="New Password"
                    placeholder="New Password"
                    name="newPassword"
                    values={values.newPassword}
                    onChange={handleChange}
                  />
                  <ErrorMessage name="newPassword" component={TextError} />
                  <PasswordInput
                    label="Confirm Password"
                    placeholder="Confirm Password"
                    name="confirmPassword"
                    values={values.confirmPassword}
                    onChange={handleChange}
                  />
                  <ErrorMessage name="confirmPassword" component={TextError} />

                  <ButtonPrimary disabled={loading} onClick={handleSubmit} loading={loading} />
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>

      <div className="hidden sm:block" aria-hidden="true">
        <div className="py-5">
          <div className="border-t border-gray-200" />
        </div>
      </div>
    </>
  );
};

export default ChangePassword;
