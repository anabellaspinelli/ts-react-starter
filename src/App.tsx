import './App.css';
import { Background } from './Background';
import { ThemeProvider } from './contexts/theme-context';
import { Toggle } from './Toggle';

function App(): JSX.Element | null {
  return (
    <ThemeProvider>
      <Background>
        <div className="px-4 mx-auto max-w-screen-sm md:max-w-screen-md md:p-0 lg:max-w-screen-lg xl:max-w-screen-xl">
          <div className="absolute right-0 top-0 mr-4 mt-4 md:mr-6 md:mt-6">
            <Toggle />
          </div>
          <div className="min-h-screen flex justify-center items-center">
            <h1 className="text-gray-900 dark:text-white text-3xl sm:text-5xl lg:text-6xl leading-none font-extrabold tracking-tight mb-8">
              Dark Mode Template
            </h1>
          </div>
        </div>
      </Background>
    </ThemeProvider>
  );
}

export default App;
