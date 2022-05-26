import { createSlice } from "@reduxjs/toolkit";
import users from "./users.json";

export interface User {
  id: string;
  name: string;
  age: number;
}

interface UserState {
  users: User[];
}

const initialState: UserState = {
  users,
};

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: {},
});

export const userReducer = userSlice.reducer;
