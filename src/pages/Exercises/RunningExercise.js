import React from 'react'
import { useCallback, useState, useEffect } from 'react';

let currentTimer = 0;

const RunningExercise = () => {
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

  // let record = useCallback(() => {
  //   setRunning(false);
  //   let newRecord = currentTimer 
  //   setRecords([newRecord, ...records])
  //   console.log(records)
  // }, [records]);

  let record = useCallback(() => {
    setRunning(false);
    let newRecord = {mins: mins, secs: secs, mills:mills} 
    setRecords([newRecord, ...records])
  }, [records, mins,secs, mills,]);
  

  const timeList = records.map((time, key)=>{
    return <p key={key}>{time.mins}:{time.secs}.{time.mills}</p>
  })
  return (
    <main className='exercise__main'>
    <div className='exercise__content'>
      <header className='exercise__heading'>
        <div className='heading__content'>
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
      <button onClick={record}>
        Record
      </button>
    </div>
    <div className='laps'>
        {timeList}
    </div>
    </div>
  </main>
  )
}

export default RunningExercise