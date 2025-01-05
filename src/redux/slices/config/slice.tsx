import { createSlice } from "@reduxjs/toolkit";

interface ConfigStateProps {
  appLoader: boolean;
  isInternetReachable: boolean;
}
const initialState: ConfigStateProps = {
  appLoader: false,
  isInternetReachable: true,
};

const configSlice = createSlice({
  name: "config",
  initialState,
  reducers: {
    setAppLoader: (state, action) => {
      state.appLoader = action.payload;
    },
    setIsInternetReachable: (state, action) => {
      state.isInternetReachable = action.payload;
    },
  },
});

export default configSlice;
