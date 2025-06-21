import React from 'react';
import Parent from './Components/review/parent';
import CustomCounter from './Components/customHook/CustomCounter';
import CustomLimit from './Components/customHook/CustomLimit';
import ToggleWithOneRadio from './Components/Toggle/ToggleWithOneRadio';


const App = () => {
  return (
    <div>

        <CustomLimit/>

        <ToggleWithOneRadio/>
        
    
      
    </div>
  );
}

export default App;
