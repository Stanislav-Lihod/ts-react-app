import {getCounter} from "./getCounter";
import {DeepPartial} from "@reduxjs/toolkit";
import {StateSchema} from "app/providers/StoreProvider";

describe('getCounter', ()=>{
  test('should return counter value', ()=>{
    const expectValue = {value: 10}
    const state: DeepPartial<StateSchema> = {
      counter: expectValue
    }
    expect((getCounter(state as StateSchema))).toEqual(expectValue)
  })
})