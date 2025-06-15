import { createSlice } from '@reduxjs/toolkit';

const initialState: State = {
  nextPrayer: null,
  selectedZiker:null
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setNextPrayerTime: (state, action) => {
      state.nextPrayer = action.payload;
    },
    setSelectedZiker:(state,action)=> {
      state.selectedZiker = action.payload
    }
  },
});

export const { setNextPrayerTime, setSelectedZiker } = userSlice.actions;
export default userSlice.reducer; 
