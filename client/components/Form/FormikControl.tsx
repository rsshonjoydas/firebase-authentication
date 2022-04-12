import Input from './Input';

const FormikControl = ({ control, ...rest }: any) => {
  switch (control) {
    case 'input':
      return <Input {...rest} />;
    default:
      return null;
  }
};

export default FormikControl;
