import { configureStore } from "@reduxjs/toolkit";
import storeDataSlice from "./Slices/specexDataSlice";

export const store = configureStore({
  reducer: {
    rocketDataSlice: storeDataSlice,
  },
});
