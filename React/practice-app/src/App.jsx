

import './App.css'
import Student from './Components/props/student'
import CounterApp from './Components/useState/CounterApp'
import Buttons from './Components/workings/buttons'
import ConditionalRendering from './Components/workings/conditionalRendering'
import RenderingLIst from './Components/workings/renderingLIst'

function App() {
 

  return (
    <>
     {/* <CounterApp/>
     <RenderingLIst/>
     <ConditionalRendering/> */}
     <Buttons/>
     <Student name='SpiderMan' age={20} isStudent={false}/>
    </>
  )
}

export default App
