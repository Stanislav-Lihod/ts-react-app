import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {User, userAction} from "entities/User";
import {USER_LOCALSTORAGE_KEY} from "shared/const/LocalStorage";

interface LoginByUsernameProps {
  username: string;
  password: string;
}
export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, { rejectValue: string }>(
  'login/loginByUsername',
  async (authData, thunkAPI) => {
    try {
      const response = await axios.post<User>('http://localhost:7777/login', authData);

      if (!response.data) {
        throw new Error('No data in response');
      }

      thunkAPI.dispatch(userAction.setAuthData(response.data))
      localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data))

      return response.data;
    } catch (e) {
      console.log(e.message);
      return thunkAPI.rejectWithValue('error');
    }
  },
);