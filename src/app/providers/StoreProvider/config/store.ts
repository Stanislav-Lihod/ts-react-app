import { configureStore } from '@reduxjs/toolkit'
import {StateSchema} from "./StateSchema";
import {counterReducer} from "entities/Counter/model/slice/counterSlice";

export function createReduxStore (initialState: StateSchema){
  return configureStore<StateSchema>({
      reducer: {
        counter: counterReducer
      },
      devTools: true,
      preloadedState: initialState
    }
  )
}

// Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof store.dispatch