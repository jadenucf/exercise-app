import React from 'react'
import DurationExercise from './DurationExercise.js'
import RepetitionExercise from './RepetitionExercise.js'
import RunningExercise from './RunningExercise.js'

import { useCallback, useState } from 'react'

import data from '../../data/listItems.json'



const Exercises = () => {
  let screen
  const MAIN_SCREEN = 0
  // const REPETITION_EXERCISE = 'repetition'
  const DURATION_EXERCISE = 'duration'
  const REPETITION_EXERCISE = 'repetition'
  const RUNNING_EXERCISE = 'running'

  const [exerciseScreen, setExerciseScreen] = useState(MAIN_SCREEN)
  const [props, setProps] = useState({})

  const setExercise = useCallback((name, type)=>{

  setProps(data.find(item => item.name === name))
    setExerciseScreen(type)
    console.log(type)
  },[])

  // List item
  const ListItem = ({alt, src, name, type, setExercise} ) =>{
    return(
      <li className='exercise__card' onClick={() => setExercise(name, type)}>
      <div className='exercise__media'>
        <img className='exercise__media__image' alt={alt} src={src}/>
      </div>
        <p className='exercise__card__desc'>{name}</p>
    </li>
    )
  }
  
  // Mapped list items
  const listItems = data.map((item, key) => {
    return (
        <ListItem 
          key={key} 
          {...item}
          setExercise ={setExercise}
        />
      )
  })

  // Screen switch statement
  switch (exerciseScreen){
    case MAIN_SCREEN:
      screen = <>
        <main className='exercise__main'>
          <div className='exercise__content'>
            <header className='exercise__heading'>
              <div className='heading__content'>
                <h1 className='exercise__title'>Exercise Types </h1>
                <p className='exercise__desc'>Choose from repetition exercises, duration exercises, or stretches. We don't care!</p>
              </div>
            </header>
            <ul className='exercise__grid'>
              {listItems}
            </ul>
          </div>
        </main>
      </>
      break;
      case DURATION_EXERCISE:
      screen = <>
        <DurationExercise
        {...props}
        />
      </>
      break;
      case REPETITION_EXERCISE:
      screen = <>
        <RepetitionExercise
        {...props}
        />
      </>
      break;
      case RUNNING_EXERCISE:
      screen = <>
        <RunningExercise
        {...props}
        />
      </>
      break;

    default:
      <>404 error</>
  }
  return (
    <>
    {screen}
    </>
  ) 
}

export default Exercises