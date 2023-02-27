import { useCallback, useState } from 'react';
import './App.css';
import Navigation from './components/Navigation.js'
import Home from './pages/Home/index.js'
import Exercises from './pages/Exercises/index.js'

function App() {
  // Screen variable
  let screen
  // Pages variables
  const HOME_SCREEN = 0
  const EXERCISE_SCREEN = 1

  // Simple useState variable that determines what screen the user is on.
  const [currentScreen, setCurrentScreen] = useState(HOME_SCREEN)

  const onChange = useCallback((currentScreen) =>{
    setCurrentScreen(currentScreen)
  },[])

  switch(currentScreen){

    case HOME_SCREEN:
      screen = <>
        <Home/>
      </>
      break

    case EXERCISE_SCREEN:
      screen = <>
        <Exercises
        />
      </>
      break

    default:
      screen =<>
        <p>404 error wee woo.</p>
      </>
  }

  return (
    <div className="App">

      <Navigation
        onChange={onChange}
        HOME_SCREEN = {HOME_SCREEN}
        EXERCISE_SCREEN = {EXERCISE_SCREEN}
      />
      {screen}
    </div>
  );
}

export default App;
