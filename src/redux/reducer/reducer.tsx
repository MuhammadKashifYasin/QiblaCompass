import { createSlice } from '@reduxjs/toolkit';

interface State {
  nextPrayer: null;
}

const initialState: State = {
  nextPrayer: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setNextPrayerTime: (state, action) => {
      state.nextPrayer = action.payload;
    },
  },
});

export const { setNextPrayerTime } = userSlice.actions;
export default userSlice.reducer; // Default export the reducer
