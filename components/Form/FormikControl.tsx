import Input from './Input';
import Textarea from './Textarea';

const FormikControl = ({ control, ...rest }: any) => {
  switch (control) {
    case 'input':
      return <Input {...rest} />;
    case 'textarea':
      return <Textarea {...rest} />;
    default:
      return null;
  }
};

export default FormikControl;
