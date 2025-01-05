import { RootState } from "~redux";
import userSlice from "./slice";
export const userSliceReducer = userSlice.reducer;
export const { setIsLoggedIn, setUserMeta, setToken } = userSlice.actions;
export const selectToken = (state: RootState) => state.user.token;
export const selectIsLoggedIn = (state: RootState) => state.user.isLoggedIn;
export const selectUserMeta = (state: RootState) => state.user.userMeta;
