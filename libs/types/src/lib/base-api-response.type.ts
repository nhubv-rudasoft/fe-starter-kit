interface ResponseEntityMessages {
  id: string;
  message: string;
}

export interface BaseResponse<T> {
  responseCode: '200' | '400' | '401' | '403' | '404' | '500';
  responseMessage: string;
  responseEntityMessages: ResponseEntityMessages[];
  body: T;
}
