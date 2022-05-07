import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  rocketData: [],
  searchData: [],
};

const storeDataSlice = createSlice({
  name: "spacexData",
  initialState,
  reducers: {
    storeAllData: (state, { payload }) => {
      state.rocketData = payload;
    },
    searchData: (state, { payload }) => {
      state.searchData = payload;
    },
  },
});

export const { storeAllData, searchData } = storeDataSlice.actions;
export default storeDataSlice.reducer;
