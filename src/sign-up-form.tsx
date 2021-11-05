import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { Checkbox, Select, TextInput } from './form-inputs';

interface FormValues {
  email: string;
  firstName: string;
  lastName: string;
}

const formValidationSchema = Yup.object({
  firstName: Yup.string()
    .max(15, 'Must be 15 characters or less')
    .required('Required'),
  lastName: Yup.string()
    .max(15, 'Must be 20 characters or less')
    .required('Required'),
  email: Yup.string().email('Invalid email address').required('Required'),
  jobType: Yup.string().min(0).required('Please select a job type'),
  terms: Yup.boolean()
    .required('Required')
    .oneOf([true], 'You must accept the terms and conditions.'),
});

export const SignUpForm = () => {
  const initialValues: FormValues = {
    email: '',
    firstName: '',
    lastName: '',
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => alert(JSON.stringify(values))}
      validationSchema={formValidationSchema}
    >
      <Form>
        <div className="mt-4">
          <TextInput label="First name" name="firstName" type="text" />
        </div>

        <div className="mt-4">
          <TextInput label="Last name" name="lastName" type="text" />
        </div>

        <div className="mt-4">
          <TextInput label="Email" name="email" type="email" />
        </div>

        <div className="mt-4">
          <Select label="Job type" name="jobType" type="text">
            <option value="">Select an option</option>
            <option value="designer">Designer</option>
            <option value="developer">Developer</option>
          </Select>
        </div>

        <div>
          <Checkbox label="I accept the terms" name="terms">
            <span aria-label="hand emoji" role="img">
              ✋🏻
            </span>
            I accept the terms
          </Checkbox>
        </div>

        <button
          className="mt-4 bg-blue-400 text-white font-bold p-2 rounded-md"
          type="submit"
        >
          Submit
        </button>
      </Form>
    </Formik>
  );
};
