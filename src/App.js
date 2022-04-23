import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import ComponentA from './ComponentA'
import ComponentB from './ComponentB'
import { createContext, useEffect, useState } from 'react';
export const AppContext = createContext()
function App() {
  const [input, setInput] = useState('')
 
  return (
    <>
      <AppContext.Provider value={{ input  , setInput}}>
        <div >
          <ComponentA />
          <ComponentB />
        </div>
      </AppContext.Provider>
    </>
  );
}

export default App;
