/* eslint-disable react/jsx-no-duplicate-props */
import { Form, Formik } from 'formik';
import { useState } from 'react';
import * as Yup from 'yup';
import { useAppSelector } from '../../../../redux/hooks';
import { changeDisplayName } from '../../../../redux/services/accountServices';
import ButtonPrimary from '../../../Button/ButtonPrimary';
import FormikControl from '../../../Form/FormikControl';

// TODO: Formik Auth initial value
const InitialValues = {
  name: '',
};

// TODO: Formik Register validation schema
const Schema = Yup.object().shape({
  name: Yup.string().required('Your name is required.').min(3, 'Too short.').max(25, 'Too long.'),
});

const DisplayName = () => {
  const [loading, setLoading] = useState(false);

  const { currentUser } = useAppSelector((state) => state.auth);

  const handleSubmit = async (values: any) => {
    const { name } = values;
    if (!currentUser || !name?.trim()) return;
    if (name === currentUser?.displayName) return;

    setLoading(true);
    await changeDisplayName(currentUser, name);
    setLoading(false);
  };

  return (
    <Formik initialValues={InitialValues} validationSchema={Schema} onSubmit={handleSubmit}>
      {({ values, handleChange }) => (
        <Form>
          <div className="col-span-6 sm:w-full">
            <label
              htmlFor="name"
              className="block after:content-['*'] after:ml-0.5 after:text-red-500"
            >
              Name
            </label>
            <FormikControl
              control="input"
              placeholder={currentUser?.displayName}
              type="text"
              name="name"
              value={values.name}
              onChange={handleChange}
            />
            <ButtonPrimary disabled={loading} onClick={handleSubmit}>
              {loading ? 'Loading...' : 'Change'}
            </ButtonPrimary>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default DisplayName;
