import {CounterSchema} from "entities/Counter";
import {counterReducer ,counterActions} from "./counterSlice";

describe('counterSlice', ()=>{
  test('increment',()=>{
    const state: CounterSchema = {value: 10}
    expect(counterReducer(state, counterActions.increment)).toEqual({value: 11})
  });
  test('decrement',()=>{
    const state: CounterSchema = {value: 10}
    expect(counterReducer(state, counterActions.decrement)).toEqual({value: 9})
  });
  test('should work with undefined state (increment)',()=>{
    expect(counterReducer(undefined, counterActions.increment)).toEqual({value: 1})
  });
  test('should work with undefined state (decrement)',()=>{
    expect(counterReducer(undefined, counterActions.decrement)).toEqual({value: -1})
  })
})