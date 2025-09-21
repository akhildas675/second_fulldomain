
import ButtonToggle from "./Components/useContext/ButtonToggle";
import ContextTheme from "./Components/useContext/ContextTheme";
import DisplayTheme from "./Components/useContext/DisplayTheme";

const App = () => {
  return (
  
      <ContextTheme>
        <ButtonToggle/>
        <DisplayTheme/>
      </ContextTheme>
   
  );
}

export default App;
