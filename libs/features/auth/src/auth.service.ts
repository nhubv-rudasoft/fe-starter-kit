import { apiPost } from '@libs/data-access/service';
import { AppConstants } from '@libs/config';
import { BaseResponse } from '@libs/types';
import { LoginRequest, LoginResponse, RegisterRequest, RegisterResponse } from './auth.type';
import { API_AUTH_SIGN_IN_URI, API_AUTH_SIGN_UP_URI } from './auth.constant';

export function getJwtToken() {
  return localStorage.getItem(AppConstants.LOCALSTORAGE.JWT_TOKEN);
}

export function signIn(payload: LoginRequest) {
  return apiPost<LoginRequest, BaseResponse<LoginResponse>>({
    url: API_AUTH_SIGN_IN_URI,
    payload: payload,
  });
}

export function signUp(payload: RegisterRequest) {
  return apiPost<LoginRequest, BaseResponse<RegisterResponse>>({
    url: API_AUTH_SIGN_UP_URI,
    payload: payload,
  });
}
