import React, {useState} from 'react';

import classes from './Counter.module.less'

export const Counter = () => {
  const [count, setCount] = useState(0)

  const incrementCount = () =>{
    setCount(count + 1)
  }

  const decrementCount = () =>{
    if (count > 0) {
      setCount(count - 1)
    }
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={incrementCount} className={classes.btn}>increment</button>
      <button onClick={decrementCount}>decrement</button>
    </div>
  );
};