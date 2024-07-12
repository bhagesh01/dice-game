
import { useState } from 'react'
import './App.css'
import Startgame from './components/Startgame'
import Gameplay from './components/Gameplay';

function App() {
  const [isGameStarted , setIsGameStarted] = useState(false);

  function toggleGameplay(){
    setIsGameStarted(true);
  }
  return (
    <div>

    {
      isGameStarted ? <Gameplay/> : <Startgame
      toggle = {toggleGameplay}/>
    }
    
      
    </div>
  )
}

export default App
