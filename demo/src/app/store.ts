import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import userSlice from "../data/users/user-slice";
import { appReducer } from "../app-slice";

export const store = configureStore({
  reducer: {
    users: userSlice,
    app: appReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
