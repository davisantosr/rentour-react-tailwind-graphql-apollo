import { createSelector } from "reselect";
import { IRootAppState } from "../../../@types";

const selectHomePage = (state: IRootAppState) => state.homePage;

export const makeSelectTopVehicles = createSelector(
  selectHomePage,
  (homePage) => homePage.topVehicles
);
