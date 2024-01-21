import {configureStore} from "@reduxjs/toolkit";
import {StateSchema} from "./StateSchems";
import {counterReducer} from "entities/Counter";
import {userReducer} from "entities/User";

export function createReduxStore(initialState?: StateSchema){
  return configureStore<StateSchema>({
    reducer:{
      counter: counterReducer,
      user: userReducer
    },
    devTools: true,
    preloadedState: initialState
  })
}