import React from 'react'
import { useCallback, useState, useEffect } from 'react';

let currentTimer = 0;

const DurationExercise = ({name}) => {
  let [running, setRunning] = useState(false);
  let [timer, setTimer] = useState(0);
  let [records, setRecords] = useState([])
  let updateTimer = useCallback(() => {
    if (running) {
      setTimer((timer) => timer + 10);
    }
  }, [running]);

  useEffect(() => {
    currentTimer = setInterval(updateTimer, 10);
    return () => clearInterval(currentTimer);
  }, [updateTimer]);

  let startStop = useCallback(() => {
    setRunning((running) => {
      if (!running) {
        currentTimer = setInterval(updateTimer, 10);
      } else {

        
        clearInterval(currentTimer);
      }
      return !running;
    });
  }, [updateTimer]);

  let reset = useCallback(() => {
    setTimer(0);
    setRunning(false);
    clearInterval(currentTimer);
  }, []);

  let mins = Math.floor((timer / (1000 * 60)) % 60).toString().padStart(2, '0');
  let secs = Math.floor((timer / 1000) % 60).toString().padStart(2, '0');
  let mills = (timer % 1000).toString().padStart(3, '0');
  return (

    <main className='exercise__main'>
    <div className='exercise__content'>
      <header className='exercise__heading'>
        <div className='heading__content'>
          <h1 className='exercise__title'>{name}</h1>
        </div>
      </header>
      <div>
      <p>
        {mins}:{secs}.{mills}
      </p>
      <button onClick={startStop}>
        {running ? 'Pause' : 'Start'}
      </button>
      <button onClick={reset}>
        Reset
      </button>
    </div>
    </div>
  </main>
  )
}

export default DurationExercise