export interface UserProfile {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  avatar: string;
  photoId: number;
  createdAt: string;
  updatedAt: string;
  isVerified: boolean;
}

export interface UserSetting {
  locale: 'en' | 'vi';
  timeZone: string;
  dateFormat: string;
  timeFormat: string;
  currency: string;
  numberFormat: string;
  theme: 'light' | 'dark';
}

export interface UserState {
  profile: UserProfile | null;
  setting: UserSetting | null;
}
