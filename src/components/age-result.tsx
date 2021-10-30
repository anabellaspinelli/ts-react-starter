import React from 'react';
import { GuessedAgeData } from 'src/App';

export function AgeResult({ name, age }: GuessedAgeData): JSX.Element {
  return (
    <div className="mt-12 p-6 rounded-xl bg-white shadow-lg">
      <h2 className="text-xl">{`Okay ${name}! Your estimated age is`}</h2>
      <p>{age} years!</p>
    </div>
  );
}
