import {getCounterValue} from "./getCounterValue";
import {DeepPartial} from "@reduxjs/toolkit";
import {StateSchema} from "app/providers/StoreProvider";

describe('getCounterValue', ()=>{
  test('should return value', ()=>{
    const expectValue = {value: 10}
    const state: DeepPartial<StateSchema> = {
      counter: expectValue
    }
    expect(getCounterValue(state as StateSchema)).toEqual(10)
  })
})