

import './App.css'
import Student from './Components/props/student'
import ChangeColor from './Components/useState/ChangeColor'

import CounterApp from './Components/useState/CounterApp'
import RealTimeInput from './Components/useState/realTimeInput'
import ToggleView from './Components/useState/toggleView'
import Buttons from './Components/workings/buttons'
import ConditionalRendering from './Components/workings/conditionalRendering'
import RenderingLIst from './Components/workings/renderingLIst'

function App() {
 

  return (
    <>
    <CounterApp/>
    <RealTimeInput/>
    <ToggleView/>
   <ChangeColor/>
    </>
  )
}

export default App
