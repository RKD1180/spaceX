import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  rocketData: [],
};

const storeDataSlice = createSlice({
  name: "spacexData",
  initialState,
  reducers: {
    storeAllData: (state, { payload }) => {
      state.rocketData = payload;
    },
  },
});

export const { storeAllData } = storeDataSlice.actions;
export default storeDataSlice.reducer;
