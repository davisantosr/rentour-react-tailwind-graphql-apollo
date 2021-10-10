import { createSlice } from "@reduxjs/toolkit";
import { IHomePageState } from "./type";

const initialState: IHomePageState = {
  topVehicles: [],
};

const homePageSlice = createSlice({
  name: "homePage",
  initialState,
  reducers: {
    setTopVehicles: (state, action) => {
      state.topVehicles = action.payload;
    },
  },
});

export const { setTopVehicles } = homePageSlice.actions;
export default homePageSlice.reducer;
