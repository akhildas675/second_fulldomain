import Message from "./Components/Higher/Message";
import MessageComponent from "./Components/Higher/MessageComponent";
import NewParent from "./Components/props/NewParent";




const App = () => {

  const MessageData = MessageComponent(Message)
  return (
  
   
   <div>
   
    <NewParent/>
   
   </div>
  
  );
}

export default App;



