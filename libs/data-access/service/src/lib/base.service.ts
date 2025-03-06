import { AxiosHeaders, AxiosRequestConfig } from 'axios';
import { instance } from '@libs/data-access/interceptor';
import { AppConstants } from '@libs/config';

export type RequestHeaders = Record<string, string>;

interface RequestOptions<P> {
  params?: Record<string, any>;
  payload?: P;
  headers?: RequestHeaders;
  responseType?: AxiosRequestConfig['responseType'];
}

const getRequestHeader = (headers?: RequestHeaders): AxiosHeaders => {
  const accessToken = localStorage.getItem(AppConstants.LOCALSTORAGE.JWT_TOKEN);

  const requestHeaders: {
    [key: string]: string;
  } = {
    Accept: 'application/json, text/plain, */*',
    'Accept-Language': 'en',
    ...(headers ?? {}),
  };

  if (accessToken) {
    requestHeaders['Authorization'] = `Bearer ${accessToken}`;
  }
  return <AxiosHeaders>requestHeaders;
};
export const apiGet = async <P, D>({
  url,
  params,
  headers,
  responseType = 'json',
}: RequestOptions<P> & { url: string }): Promise<D> => {
  const response = await instance.get<D>(url, {
    headers: getRequestHeader(headers),
    params,
    responseType,
  });
  return response as D;
};

export const apiPost = async <P, D>({
  url,
  payload,
  headers,
  responseType = 'json',
}: RequestOptions<P> & { url: string }): Promise<D> => {
  const response = await instance.post<D>(url, payload, {
    headers: getRequestHeader(headers),
    responseType,
  });
  return response as D;
};

export const apiPut = async <P, D>({
  url,
  payload,
  headers,
  responseType = 'json',
}: RequestOptions<P> & { url: string }): Promise<D> => {
  const response = await instance.put<D>(url, payload, {
    headers: getRequestHeader(headers),
    responseType,
  });
  return response as D;
};

export const apiDelete = async <P, D>({
  url,
  headers,
  responseType = 'json',
}: RequestOptions<P> & { url: string }): Promise<D> => {
  const response = await instance.delete<D>(url, {
    headers: getRequestHeader(headers),
    responseType,
  });
  return response as D;
};
