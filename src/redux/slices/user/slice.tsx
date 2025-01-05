import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserMeta } from "~models";

interface UserStateProps {
  token: string | null;
  isLoggedIn: boolean;
  userMeta: UserMeta | null;
}
const initialState: UserStateProps = {
  token: null,
  isLoggedIn: false,
  userMeta: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setUserMeta: (state, action) => {
      state.userMeta = action.payload;
    },
    setIsLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload;
    },
  },
});

export default userSlice;
