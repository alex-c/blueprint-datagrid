import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const sliceName = "app";

export interface AppState {
  isDarkModeActive: boolean;
}

const initialState = {
  isDarkModeActive: (localStorage.getItem("isDarkModeActive") ?? "true") === "true",
};

const setDarModeActive = (isDarkModeActive: boolean) => {
  document.body.className = isDarkModeActive ? "bp5-dark" : "bp5-body";
};
setDarModeActive(initialState.isDarkModeActive);

export const appSlice = createSlice({
  name: sliceName,
  initialState,
  reducers: {
    setDarkModeActive(state, action: PayloadAction<boolean>) {
      localStorage.setItem("isDarkModeActive", action.payload.toString());
      setDarModeActive(action.payload);
      state.isDarkModeActive = action.payload;
    },
  },
});

export const appReducer = appSlice.reducer;
