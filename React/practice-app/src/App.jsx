import ProfileContext from "./Components/PracticeComponent/UseContext/ProfileContext";
import UserDetails from "./Components/PracticeComponent/UseContext/UserDetails";




const App = () => {
  return (
    <div>

      <ProfileContext>

      <UserDetails/>
      </ProfileContext>
    

    </div>
  );
}

export default App;
