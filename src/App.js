import './App.css';
import { CounterProvider } from './Context/CounterContext';
import Router from './Router/Router';

function App() {
  return (
    <CounterProvider>
      <Router />
    </CounterProvider>
  );
}

export default App;
