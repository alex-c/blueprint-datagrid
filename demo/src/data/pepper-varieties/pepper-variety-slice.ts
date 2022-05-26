import { createSlice } from "@reduxjs/toolkit";
import varieties from "./pepper-varieties.json";

export interface Variety {
  name: string;
  species: string;
  shuLowerBound: number;
  shuUpperBound: number;
  rare: boolean;
}

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
  extraReducers: {},
});

export const varietyReducer = varietySlice.reducer;
