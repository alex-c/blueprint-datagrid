import { createSlice } from "@reduxjs/toolkit";
import { varieties, Variety } from "./pepper-varieties";

interface VarietyState {
  varieties: Variety[];
}

const initialState: VarietyState = {
  varieties,
};

export const varietySlice = createSlice({
  name: "varieties",
  initialState,
  reducers: {},
});

export const varietyReducer = varietySlice.reducer;
