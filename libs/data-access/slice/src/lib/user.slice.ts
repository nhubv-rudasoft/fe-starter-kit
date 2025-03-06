import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserProfile, UserSetting, UserState } from '@libs/types';
import { AppConstants } from '@libs/config';

const initialState: UserState = {
  profile: null,
  setting: {
    locale: 'en',
    timeZone: 'UTC',
    dateFormat: 'MM/DD/YYYY',
    timeFormat: '12h',
    currency: 'USD',
    numberFormat: '1,000.00',
    theme: 'light',
  },
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // Set user profile
    setProfile: (state, action: PayloadAction<UserProfile>) => {
      state.profile = action.payload;
    },

    // Set user setting
    setSetting: (state, action: PayloadAction<UserSetting>) => {
      state.setting = action.payload;
      localStorage.setItem(AppConstants.LOCALSTORAGE.SETTINGS, JSON.stringify(state.setting));
    },
  },
});

export const { setProfile } = userSlice.actions;
export default userSlice.reducer;
