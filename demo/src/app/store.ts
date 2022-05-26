import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import userSlice from "../data/users/user-slice";

export const store = configureStore({
  reducer: {
    users: userSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
