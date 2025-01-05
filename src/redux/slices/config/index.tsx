import { RootState } from "~redux";
import configSlice from "./slice";
export const configSliceReducer = configSlice.reducer;
export const { setAppLoader, setIsInternetReachable } = configSlice.actions;
export const selectLoader = (state: any) => state.config.appLoader;
export const selectIsInternetReachable = (state: RootState) =>
  state.config.isInternetReachable;
