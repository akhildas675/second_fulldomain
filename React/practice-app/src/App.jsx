import React from 'react';
import Child from './Components/props/Child';
import Parent from './Components/props/Parent';
import MainContext from './Components/useContext/MainContext';
import Profile from './Components/useContext/Profile';
import FetchUsers from './Components/useEffect/FetchUsers';
import Timer from './Components/useEffect/Timer';

const App = () => {
  return (
    <div>

      <h1>My app component</h1>

      <Parent/>

      <MainContext>
        <Profile/>
      </MainContext>

      <FetchUsers/>

      <Timer/>
      
    </div>
  );
}

export default App;
