import { useState } from 'react';
import Home from './pages/Home';
import {DataContext} from "./context/Context"


function App() {
  const [data,setData] = useState([])
  const [current,setCurrent] = useState([])
  const [volume,setVolume] = useState(0)
  const [principal,setPrincipal] = useState([])


  return (
    <div className="App ">
      <DataContext.Provider value={{data,setData,current,setCurrent,volume,setVolume,principal,setPrincipal}}>
        <Home/>
      </DataContext.Provider>
    </div>
  );
}

export default App;
