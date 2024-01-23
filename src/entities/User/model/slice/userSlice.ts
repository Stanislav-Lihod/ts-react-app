import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {User, UserSchema} from "entities/User";
import {USER_LOCALSTORAGE_KEY} from "shared/const/LocalStorage";

const initialState: UserSchema={}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<User>)=>{
      state.authData = action.payload
    },
    initAuthData: (state) =>{
      const user = localStorage.getItem(USER_LOCALSTORAGE_KEY)
      if (user){
        state.authData = JSON.parse(user)
      }
    },
    signOut: (state) =>{
      localStorage.removeItem(USER_LOCALSTORAGE_KEY)
      state.authData = undefined
    }
  },
})

export const { actions: userAction, reducer: userReducer } = userSlice