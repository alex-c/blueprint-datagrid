import { createSlice } from "@reduxjs/toolkit";
import users from "./users.json";

export interface User {
  id: string;
  name: string;
  age: number;
  enabled: boolean;
  birth: Date;
}

const parseUsers = (users: any[]) => {
  const result: User[] = [];
  for (const user of users) {
    result.push({
      ...user,
      birth: new Date(user.birth)
    });
  }
  return result;
}

interface UserState {
  users: User[];
}

const initialState: UserState = {
  users: parseUsers(users),
};

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const userReducer = userSlice.reducer;
