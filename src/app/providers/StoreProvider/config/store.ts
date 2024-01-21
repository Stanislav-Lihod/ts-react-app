import {configureStore} from "@reduxjs/toolkit";
import {StateSchema} from "./StateSchems";
import {counterReducer} from "entities/Counter";

export function createReduxStore(initialState?: StateSchema){
  return configureStore<StateSchema>({
    reducer:{
      counter: counterReducer
    },
    devTools: true,
    preloadedState: initialState
  })
}