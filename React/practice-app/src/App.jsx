
import CustomHooks from "./Components/CustomHook/CustomHooks";
import DisplayUsersCustom from "./Components/CustomHook/DisplayUsersCustom";
import LazyLoading from "./Components/LazyLoading/LazyLoading";
import EventChangeCount from "./Components/Redux/ReduxComponent/EventChangeCount";
import FetchUser from "./Components/Redux/ReduxComponent/FetchUser";
import EventCount from "./Main/EventCount";



const App = () => {
  return (
  
   
   <div>
   
   <LazyLoading/>
   <DisplayUsersCustom/>
   <FetchUser/>
   </div>
  
  );
}

export default App;
