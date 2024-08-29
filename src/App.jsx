import './App.css';
import { createContext } from 'react';
import { userData } from './data/data';
import { Child } from './components/Child';

export const GlobalContext = createContext(null);

function App() {
  return (
    <GlobalContext.Provider value={userData}>
      <Child />
    </GlobalContext.Provider>
  );
}

export default App;
