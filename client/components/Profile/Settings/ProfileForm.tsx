import { Form, Formik } from 'formik';
import { useState } from 'react';
import * as Yup from 'yup';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { profileUpdate } from '../../../redux/slice/profileSlice';
import ButtonPrimary from '../../Button/ButtonPrimary';
import FormikControl from '../../Form/FormikControl';

// TODO: Formik Auth initial value
const InitialValues = {
  fullName: '',
  contactEmail: '',
  phone: '',
  website: '',
  address: '',
  about: '',
};

// TODO: Formik Register validation schema
const Schema = Yup.object().shape({
  fullName: Yup.string()
    .required('Your first name is required.')
    .min(3, 'Too short.')
    .max(25, 'Too long.'),
  contactEmail: Yup.string().email('Invalid email.').required('The email is required.'),
  address: Yup.string().nullable().required('Address is required'),
  phone: Yup.number()
    .typeError("That doesn't look like a phone number")
    .positive("A phone number can't start with a minus")
    .integer("A phone number can't include a decimal point")
    .min(1000000000, 'Too short')
    .max(9999999999, 'Too long')
    .required('A phone number is required'),
  website: Yup.string().url().required('A website is required'),
  about: Yup.string()
    .required('The about is required')
    .min(5, 'too small!')
    .max(500, 'Too Long String'),
});

const ProfileForm = () => {
  const [loading, setLoading] = useState(false);

  const { currentUser } = useAppSelector((state) => state.auth);
  const { profile } = useAppSelector((state) => state.profile);
  const dispatch = useAppDispatch();

  const handleSubmit = async (values: any) => {
    const { ...data } = values;
    if (!currentUser) return;
    setLoading(true);
    await dispatch(profileUpdate({ user: currentUser, data }));
    setLoading(false);
  };

  return (
    <div>
      <div className="md:grid md:grid-cols-3 md:gap-6">
        <div className="md:col-span-1">
          <div className="px-4 sm:px-0">
            <h3 className="text-lg font-medium leading-6 text-gray-900">Profile</h3>
            <p className="mt-1 text-sm text-gray-600">
              This information will be displayed publicly so be careful what you share.
            </p>
          </div>
        </div>

        <div className="mt-5 mx-6 md:mt-0 md:col-span-2">
          <Formik initialValues={InitialValues} validationSchema={Schema} onSubmit={handleSubmit}>
            {({ values, handleChange }) => (
              <Form>
                <div className="col-span-6 sm:w-full">
                  <label
                    htmlFor="name"
                    className="block after:content-['*'] after:ml-0.5 after:text-red-500"
                  >
                    Full Name
                  </label>
                  <FormikControl
                    control="input"
                    placeholder={profile?.fullName}
                    type="text"
                    name="fullName"
                    value={values.fullName}
                    onChange={handleChange}
                  />
                  <label
                    htmlFor="fullName"
                    className="block after:content-['*'] after:ml-0.5 after:text-red-500"
                  >
                    Contract Email
                  </label>
                  <FormikControl
                    control="input"
                    placeholder={profile?.contactEmail}
                    type="email"
                    name="contactEmail"
                    value={values.contactEmail}
                    onChange={handleChange}
                  />
                  <label
                    htmlFor="name"
                    className="block after:content-['*'] after:ml-0.5 after:text-red-500"
                  >
                    Address
                  </label>
                  <FormikControl
                    control="input"
                    placeholder={profile?.address}
                    type="text"
                    name="address"
                    value={values.address}
                    onChange={handleChange}
                  />
                  <label
                    htmlFor="name"
                    className="block after:content-['*'] after:ml-0.5 after:text-red-500"
                  >
                    Phone
                  </label>
                  <FormikControl
                    control="input"
                    placeholder={profile?.phone}
                    type="text"
                    name="phone"
                    value={values.phone}
                    onChange={handleChange}
                  />
                  <label
                    htmlFor="name"
                    className="block after:content-['*'] after:ml-0.5 after:text-red-500"
                  >
                    Website
                  </label>
                  <FormikControl
                    control="input"
                    placeholder={profile?.website}
                    type="text"
                    name="website"
                    value={values.website}
                    onChange={handleChange}
                  />
                  <label
                    htmlFor="name"
                    className="block after:content-['*'] after:ml-0.5 after:text-red-500"
                  >
                    About
                  </label>
                  <FormikControl
                    control="textarea"
                    placeholder={profile?.about}
                    type="text"
                    name="about"
                    value={values.about}
                    onChange={handleChange}
                  />

                  <ButtonPrimary disabled={loading}>
                    {loading ? 'Loading...' : 'Change'}
                  </ButtonPrimary>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>

      <div className="hidden sm:block" aria-hidden="true">
        <div className="py-5">
          <div className="border-t border-gray-200" />
        </div>
      </div>
    </div>
  );
};

export default ProfileForm;
