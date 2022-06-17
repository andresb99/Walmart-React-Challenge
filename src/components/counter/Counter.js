import React, { useContext } from 'react'
import { CounterContext } from '../../Context/CounterContext';
import ClearButton from '../ClearButton/ClearButton';
import CounterButtons from '../counterbuttons/CounterButtons';
import './Counter.css';

const Counter = () => {

  const { counter } = useContext(CounterContext);

  return (
    <div className="App">
      <div className="App-header">
        <div className='counter'>
          <CounterButtons signo="-" />Counter: {counter}<CounterButtons signo="+" />
          <ClearButton />
        </div>
      </div>
    </div>
  )
}

export default Counter