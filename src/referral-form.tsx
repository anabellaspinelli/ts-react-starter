import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';

interface Employer {
  name: string;
  start_date: string;
  end_date: string;
}

interface Guarantor {
  name: string;
  address: string;
  relation: 'sibling' | 'employer' | 'parent' | 'other' | '';
}

interface ReferralFormValues {
  personal: { first_name: string; last_name: string; current_address: string };
  employer: Employer[];
  guarantor: Guarantor;
}

const FORM_INITIAL_VALUES: ReferralFormValues = {
  personal: { first_name: '', last_name: '', current_address: '' },
  employer: [{ name: '', start_date: '', end_date: '' }],
  guarantor: {
    name: '',
    address: '',
    relation: '',
  },
};

const stringValueSchema = Yup.string()
  .max(120, 'Must be 120 characters or less')
  .min(2)
  .required('Please fill in this field');

const dateValueSchema = Yup.string()
  .length(8, 'Please select a valid date')
  .required('Please fill in this field');

const referralFormValidationSchema = Yup.object({
  personal: Yup.object({
    first_name: stringValueSchema,
    last_name: stringValueSchema,
    current_address: stringValueSchema,
  }),
  employer: Yup.array(
    Yup.object({
      name: stringValueSchema,
      start_date: dateValueSchema,
      end_date: dateValueSchema,
    })
  ),
  guarantor: Yup.object({
    name: stringValueSchema,
    address: stringValueSchema,
    relation: Yup.string()
      .oneOf(['sibling', 'employer', 'parent', 'other'])
      .required('Please fill in this field'),
  }),
});

export function ReferralForm() {
  return (
    <Formik
      initialValues={FORM_INITIAL_VALUES}
      onSubmit={(values) => console.log(values)}
      validationSchema={referralFormValidationSchema}
    >
      {
        <div className="mt-12">
          <Form>
            {/* Personal */}
            <fieldset className="border border-blue-400 rounded-md p-4 flex flex-col mb-4">
              <legend className="text-xs font-medium px-2 py-px rounded bg-blue-400 text-white">
                Personal
              </legend>

              <div className="mb-2 flex flex-col">
                <label
                  className="text-xs font-medium"
                  htmlFor="personal.first_name"
                >
                  First name
                </label>
                <Field
                  className="text-sm py-1 px-2 rounded"
                  name="personal.first_name"
                  type="text"
                />
                <ErrorMessage name="personal.first_name">
                  {(msg) => (
                    <div className="text-red-500 text-xs font-semibold mt-2">
                      {msg}
                    </div>
                  )}
                </ErrorMessage>
              </div>

              <div className="mb-2 flex flex-col">
                <label
                  className="text-xs font-medium"
                  htmlFor="personal.last_name"
                >
                  Last name
                </label>
                <Field
                  className="text-sm py-1 px-2 rounded"
                  name="personal.last_name"
                  type="text"
                />
                <ErrorMessage name="personal.last_name">
                  {(msg) => (
                    <div className="text-red-500 text-xs font-semibold mt-2">
                      {msg}
                    </div>
                  )}
                </ErrorMessage>
              </div>

              <div className="mb-2 flex flex-col">
                <label
                  className="text-xs font-medium"
                  htmlFor="personal.current_address"
                >
                  Address
                </label>
                <Field
                  className="text-sm py-1 px-2 rounded"
                  name="personal.current_address"
                  type="text"
                />
                <ErrorMessage name="personal.current_address">
                  {(msg) => (
                    <div className="text-red-500 text-xs font-semibold mt-2">
                      {msg}
                    </div>
                  )}
                </ErrorMessage>
              </div>
            </fieldset>

            {/* Employer */}
            <fieldset className="border border-blue-400 rounded-md p-4 flex flex-col mb-4">
              <legend className="text-xs font-medium px-2 py-px rounded bg-blue-400 text-white">
                Employer
              </legend>

              <div className="mb-2 flex flex-col">
                <label
                  className="text-xs font-medium"
                  htmlFor="employer[0].name"
                >
                  Employer name
                </label>
                <Field
                  className="text-sm py-1 px-2 rounded"
                  name="employer[0].name"
                  type="text"
                />
                <ErrorMessage name="employer[0].name">
                  {(msg) => (
                    <div className="text-red-500 text-xs font-semibold mt-2">
                      {msg}
                    </div>
                  )}
                </ErrorMessage>
              </div>

              <div className="flex">
                <div className="mb-2 flex flex-col">
                  <label
                    className="text-xs font-medium"
                    htmlFor="employer[0].start_date"
                  >
                    Employment start date
                  </label>
                  <Field
                    className="text-sm py-1 px-2 rounded"
                    name="employer[0].start_date"
                    type="date"
                  />
                  <ErrorMessage name="employer[0].start_date">
                    {(msg) => (
                      <div className="text-red-500 text-xs font-semibold mt-2">
                        {msg}
                      </div>
                    )}
                  </ErrorMessage>
                </div>

                <div className="mb-2 flex flex-col ml-4">
                  <label
                    className="text-xs font-medium"
                    htmlFor="employer[0].end_date"
                  >
                    Employment end date
                  </label>
                  <Field
                    className="text-sm py-1 px-2 rounded"
                    name="employer[0].end_date"
                    type="date"
                  />
                  <ErrorMessage name="employer[0].end_date">
                    {(msg) => (
                      <div className="text-red-500 text-xs font-semibold mt-2">
                        {msg}
                      </div>
                    )}
                  </ErrorMessage>
                </div>
              </div>

              <button className="bg-blue-400 p-1 rounded-md text-white text-xs font-medium mt-2 hover:bg-blue-500 hover:shadow-md transition-all duration-150">
                Add another
              </button>
            </fieldset>

            {/* Guarantor */}
            <fieldset className="border border-blue-400 rounded-md p-4 flex flex-col mb-4">
              <legend className="text-xs font-medium px-2 py-px rounded bg-blue-400 text-white">
                Guarantor
              </legend>

              <div className="mb-2 flex flex-col">
                <label className="text-xs font-medium" htmlFor="guarantor.name">
                  Guarantor name
                </label>
                <Field
                  className="text-sm py-1 px-2 rounded"
                  name="guarantor.name"
                  type="text"
                />
                <ErrorMessage name="guarantor.name">
                  {(msg) => (
                    <div className="text-red-500 text-xs font-semibold mt-2">
                      {msg}
                    </div>
                  )}
                </ErrorMessage>
              </div>

              <div className="mb-2 flex flex-col">
                <label
                  className="text-xs font-medium"
                  htmlFor="guarantor.address"
                >
                  Guarantor address
                </label>
                <Field
                  className="text-sm py-1 px-2 rounded"
                  name="guarantor.address"
                  type="text"
                />
                <ErrorMessage name="guarantor.address">
                  {(msg) => (
                    <div className="text-red-500 text-xs font-semibold mt-2">
                      {msg}
                    </div>
                  )}
                </ErrorMessage>
              </div>

              <div className="mb-2 flex flex-col">
                <label
                  className="text-xs font-medium"
                  htmlFor="guarantor.relation"
                >
                  Guarantor relation
                </label>
                <Field
                  as="select"
                  className="text-sm py-1 px-2 rounded"
                  name="guarantor.relation"
                >
                  <option value="">Select an option</option>
                  <option value="parent">Parent</option>
                  <option value="sibling">Sibling</option>
                  <option value="employer">Emplotyer</option>
                  <option value="other">Other</option>
                </Field>
                <ErrorMessage name="guarantor.relation">
                  {(msg) => (
                    <div className="text-red-500 text-xs font-semibold mt-2">
                      {msg}
                    </div>
                  )}
                </ErrorMessage>
              </div>
            </fieldset>

            <button
              className="bg-green-400 p-2 w-full rounded-md text-white font-extrabold mt-2 hover:bg-green-500 hover:shadow-md transition-all duration-150"
              type="submit"
            >
              Submit
            </button>
          </Form>
        </div>
      }
    </Formik>
  );
}
