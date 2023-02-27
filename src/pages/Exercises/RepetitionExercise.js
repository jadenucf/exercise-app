import React from 'react'
import { useState } from 'react'

const RepetitionExercise = ({name}) => {
    const [number, setNumber] = useState(0)

    
  return (
    <main className='exercise__main'>
    <div className='exercise__content'>
      <header className='exercise__heading'>
        <div className='heading__content'>
          <h1 className='exercise__title'>{name}</h1>
        </div>
      </header>
      <div>
      <p>Repetition: {number}</p>
      <button onClick={() =>{
        setNumber(number-1)
      }}>
          Decrement
      </button>
      <button onClick={() =>{
        setNumber(number+1)
      }}>
          Increment
      </button>
    </div>
    </div>
  </main>
  )
}

export default RepetitionExercise