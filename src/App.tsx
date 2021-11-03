import { useReducer } from 'react';
import { TextInput } from './components/text-input';
import { toCamelCase } from './utils';

interface FormAction {
  type: 'CHANGE' | 'ERROR';
  inputName: string;
  value: string;
}

interface Employer {
  name: string;
  startDate: Date | null;
  endDate: Date | null;
}
interface FormState {
  firstName: string;
  lastName: string;
  address: string;
  employers: Employer[];
}

const initialFormState: FormState = {
  firstName: '',
  lastName: '',
  address: '',
  employers: [{ name: '', startDate: null, endDate: null }],
};

const formReducer = (state: FormState, action: FormAction) => {
  switch (action.type) {
    case 'CHANGE':
      return {
        ...state,
        [action.inputName]: action.value,
      };

    default:
      break;
  }

  return {
    ...state,
    [action.inputName]: action.value,
  };
};

const getFormAction = (
  actionType: FormAction['type'],
  label: string,
  value: string
): FormAction => ({
  type: actionType,
  inputName: toCamelCase(label),
  value,
});

function App(): JSX.Element | null {
  const [state, dispatch] = useReducer(formReducer, initialFormState);

  return (
    <div className="h-screen">
      <div className="h-full w-full flex flex-col items-center pt-16 bg-gradient-to-tr to-blue-50 from-blue-100 px-2 pb-12 bg-blue-50">
        <div className="p-4 rounded-2xl text-center bg-blue-400 hover:bg-blue-500 hover:shadow-lg transition-all">
          <header>
            <h1 className="text-3xl text-white font-bold cursor-default">
              Referencing form
            </h1>
          </header>
        </div>
        <div className="mt-8">
          <form>
            <fieldset className="border border-white rounded-md p-4 flex flex-col mb-4">
              <legend className="text-xs bg-white px-2 rounded">
                Personal
              </legend>
              <TextInput
                label="First name"
                onChange={(event) =>
                  dispatch(
                    getFormAction('CHANGE', 'First name', event.target.value)
                  )
                }
                value={state.firstName}
              />

              <TextInput
                label="Last name"
                onChange={(event) =>
                  dispatch(
                    getFormAction('CHANGE', 'Last name', event.target.value)
                  )
                }
                value={state.lastName}
              />

              <TextInput
                label="Address"
                onChange={(event) =>
                  dispatch(
                    getFormAction('CHANGE', 'Address', event.target.value)
                  )
                }
                value={state.address}
              />
            </fieldset>

            <fieldset className="border border-white rounded-md p-4 flex flex-col mb-4">
              <legend className="text-xs bg-white px-2 rounded">
                Employer
              </legend>
              <TextInput
                label="Employer name"
                onChange={(event) =>
                  dispatch(
                    getFormAction('CHANGE', 'Employer name', event.target.value)
                  )
                }
                value={state.address}
              />
              <div className="flex justify-between mb-4">
                <label className="flex flex-col text-sm">
                  Employment start date
                  <input
                    className="px-2 py-1"
                    name="employmentStartDate"
                    type="date"
                  />
                </label>
                <label className="flex flex-col ml-2 text-sm">
                  Employment end date
                  <input
                    className="px-2 py-1"
                    name="employmentEndDate"
                    type="date"
                  />
                </label>
              </div>
            </fieldset>

            <fieldset className="border border-white rounded-md p-4 flex flex-col">
              <legend className="text-xs bg-white px-2 rounded">
                Guarantor
              </legend>
              <label className="mb-4 flex flex-col text-sm">
                Guarantor name
                <input className="px-2 py-1" name="guarantorName" type="text" />
              </label>
              <label className="mb-4 flex flex-col text-sm">
                Guarantor address
                <input
                  className="px-2 py-1"
                  name="guarantorAddress"
                  type="text"
                />
              </label>
              <label className="mb-4 flex flex-col text-sm">
                Relationship to guarantor
                <select className="px-2 py-1" name="relationshipToGuarantor">
                  <option>Select one</option>
                  <option>Sibling</option>
                  <option>Employer</option>
                  <option>Other</option>
                </select>
              </label>
            </fieldset>
            <div className="flex justify-end mt-4">
              <button
                className="p-2 border-2 border-blue-400 rounded-md text-blue-400 font-bold"
                type="button"
              >
                Cancel
              </button>
              <button
                className="ml-2 p-2 border-2 border-blue-400 bg-blue-400 text-white font-bold rounded-md"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
