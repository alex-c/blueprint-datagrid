import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { userReducer } from "../data/users/user-slice";
import { appReducer } from "../app-slice";
import { varietyReducer } from "../data/pepper-varieties/pepper-variety-slice";

export const store = configureStore({
  reducer: {
    users: userReducer,
    varieties: varietyReducer,
    app: appReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
