import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cars: ["Model 3", "Model 5", "Model X", "Model Y"],
};

const carSlice = createSlice({
  name: "car",
  initialState,
  reducers: {},
});

export const selectCar = (state) => state.car.cars;

export default carSlice.reducer;
