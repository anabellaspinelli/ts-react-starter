import './App.css';
import { ReferralForm } from './referral-form';

function App(): JSX.Element | null {
  return (
    <div className="h-screen w-full overflow-y-scroll flex flex-col items-center pt-32 px-2 bg-blue-50">
      <header className="p-4 rounded-2xl text-center bg-blue-400 hover:bg-blue-500 hover:shadow-lg transition-all">
        <h1 className="text-6xl text-white font-bold cursor-default">
          Referral form
        </h1>
      </header>
      <ReferralForm />
    </div>
  );
}

export default App;
