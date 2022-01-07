import axios, { AxiosRequestConfig, AxiosRequestHeaders } from "axios";

function createHookTrigger<response, request = any>({
  baseURL,
  timeout,
  headers,
  withCredentials,
}: {
  baseURL: string;
  timeout?: number;
  headers?: AxiosRequestHeaders;
  withCredentials?: boolean;
}) {
  const triggerRequest = axios.create({
    baseURL,
    timeout,
    headers,
    withCredentials,
  });

  return {
    interceptors: triggerRequest.interceptors,
    triggeGet: triggerRequest.get,
    triggePost: triggerRequest.post,
  };
}

export default {
  createHookTrigger,
};
