import {CounterSchema} from "entities/Counter";
import {UserSchema} from "entities/User";
import {LoginSchema} from "features/AuthByUsername";
import {ProfileSchema} from "entities/Profile";
import {EnhancedStore} from "@reduxjs/toolkit";
import {ReducerManager} from "app/providers/StoreProvider/config/ReducerManager";

export interface StateSchema{
  counter: CounterSchema,
  user: UserSchema,

  //Async Reducers

  loginForm?: LoginSchema,
  profile?: ProfileSchema,
}

export type StateSchemaKey = keyof StateSchema;

export interface ReduxWithReducerManager extends EnhancedStore<StateSchema>{
  reducerManager: ReducerManager
}