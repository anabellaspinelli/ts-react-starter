import React, { useState } from 'react';

type NameFormProps = {
  handleSubmit: (name: string) => void;
};

export function NameForm({ handleSubmit }: NameFormProps): JSX.Element {
  const [name, setName] = useState('');

  return (
    <div className="mt-12 p-6 rounded-xl bg-white shadow-lg">
      <label className="flex items-center">
        Your name
        <input
          className="p-1 ml-2 rounded ring-2 ring-gray-200 hover:ring-blue-200 focus:ring-blue-300 focus:outline-none"
          name="your name"
          onChange={(event) => setName(event.target.value)}
          type="text"
          value={name}
        />
      </label>
      <button
        className="rounded-lg px-4 py-2 mt-4 w-full bg-yellow-300 hover:bg-yellow-400 transition-colors font-bold"
        onClick={() => handleSubmit(name)}
        type="submit"
      >
        Guess your age!
      </button>
    </div>
  );
}
