function App(): JSX.Element | null {
  return (
    <div className="h-screen">
      <div className="h-full w-full flex flex-col items-center pt-16 bg-gradient-to-b to-blue-50 from-blue-100 px-2 pb-12 bg-blue-50">
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
              <label className="mb-4 flex flex-col text-sm">
                First name
                <input className="px-2 py-1" name="firstname" type="text" />
              </label>
              <label className="mb-4 flex flex-col text-sm">
                Last name
                <input className="px-2 py-1" name="lastname" type="text" />
              </label>
              <label className="mb-4 flex flex-col text-sm">
                Address
                <input className="px-2 py-1" name="address" type="text" />
              </label>
            </fieldset>

            <fieldset className="border border-white rounded-md p-4 flex flex-col mb-4">
              <legend className="text-xs bg-white px-2 rounded">
                Employer
              </legend>
              <label className="mb-4 flex flex-col text-sm">
                Employer name
                <input className="px-2 py-1" name="employer" type="text" />
              </label>
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
