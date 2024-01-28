import {ReactNode, useEffect} from "react";
import {useDispatch, useStore} from "react-redux";
import {ReduxWithReducerManager} from "app/providers/StoreProvider";
import {StateSchemaKey} from "app/providers/StoreProvider/config/StateSchems";
import {Reducer} from "@reduxjs/toolkit";

export type ReducersList ={
  [name in StateSchemaKey]?: Reducer
}

export type ReducersTypeList = [StateSchemaKey, Reducer]

interface DynamicModuleLoaderProps{
  children: ReactNode,
  reducers: ReducersList,
  removeReducerAfterUnmount?: boolean
}

export const DynamicModuleLoader = (props:DynamicModuleLoaderProps) => {
  const {
    children,
    reducers,
    removeReducerAfterUnmount
  } = props

  const store = useStore() as ReduxWithReducerManager
  const dispatch = useDispatch()

  useEffect(() => {
    Object.entries(reducers).forEach(([name, reducer]:ReducersTypeList)=>{
      store.reducerManager.add(name, reducer)
      dispatch({type: `@INIT ${name} reducer`})
    })

    return () =>{
      if(removeReducerAfterUnmount){
        Object.entries(reducers).forEach(([name, reducer]:ReducersTypeList)=>{
          store.reducerManager.remove(name)
          dispatch({type: `@REMOVE ${name} reducer`})
        })
      }
    }
  }, []);

  return (
    <>
      {children}
    </>
  );
};