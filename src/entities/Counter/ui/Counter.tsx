import React from 'react';
import {Button} from "shared/ui/Button/Button";
import {useDispatch, useSelector} from "react-redux";
import {counterActions} from "entities/Counter/model/slices/counterSlice";
import {getCounterValue} from "../model/selectors/getCounterValue/getCounterValue";

export const Counter = () => {
  const dispatch = useDispatch()
  const counterValue = useSelector(getCounterValue)

  const increment = () =>{
    dispatch(counterActions.increment())
  }
  const decrement = () =>{
    dispatch(counterActions.decrement())
  }

  return (
    <div>
      <h1>{counterValue}</h1>
      <Button onClick={increment}>+</Button>
      <Button onClick={decrement}>-</Button>
    </div>
  );
};