import React, {ReactNode} from 'react';
import {Provider} from "react-redux";
import {createReduxStore} from "../index";
import {StateSchema} from "../config/StateSchems";

interface StoreProviderProps{
  children?: ReactNode,
  initialState?: StateSchema
}

export const StoreProvider = ({children, initialState}: StoreProviderProps) => {
  return (
    <Provider store={createReduxStore(initialState)}>
      {children}
    </Provider>
  );
};