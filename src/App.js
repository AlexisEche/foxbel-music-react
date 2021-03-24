import { useState } from 'react';
import Home from './pages/Home';
import {DataContext} from "./context/Context"


function App() {
  const [data,setData] = useState([])
  const [current,setCurrent] = useState([])

  return (
    <div className="App ">
      <DataContext.Provider value={{data,setData,current,setCurrent}>
        <Home/>
      </DataContext.Provider>
    </div>
  );
}

export default App;
