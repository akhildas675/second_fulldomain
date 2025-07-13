
// import ProductContext from "./Components/useContext/ProductContext";
// import ProductList from "./Components/useContext/ProductList";

import LightModeProvider from "./Components/PracticeComponent/UseContext/LightModeContext";
import LightModeDisplay from "./Components/PracticeComponent/UseContext/LightModeDisplay";








const App = () => {
  return (
    <div>

      <LightModeProvider>
        <LightModeDisplay/>
      </LightModeProvider>
     
    </div>
  );
}

export default App;
