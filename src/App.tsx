import React, { useEffect, useState } from 'react';
import { NameForm } from './components/name-form';
import { AgeResult } from './components/age-result';

export type GuessedAgeData = { name: string; age: number; count?: number };

function App(): JSX.Element | null {
  const [guessedAgeData, setGuessedAgeData] = useState<GuessedAgeData>();

  const getEstimatedAge = (name: string) => {
    fetch(`https://api.agify.io/?name=${name}`)
      .then((data) => data.json())
      .then((body) => setGuessedAgeData(body));
  };

  return (
    <div className="h-screen w-full flex flex-col items-center pt-32 px-2 bg-blue-50">
      <div className="p-4 rounded-2xl text-center bg-blue-400 hover:bg-blue-500 hover:shadow-lg transition-all">
        <header>
          <h1 className="text-6xl text-white font-bold cursor-default">
            TS React Starter
          </h1>
        </header>
      </div>
      <NameForm handleSubmit={getEstimatedAge} />
      {guessedAgeData && <AgeResult {...guessedAgeData} />}
    </div>
  );
}

export default App;
