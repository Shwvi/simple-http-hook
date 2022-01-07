import axios, { AxiosRequestConfig, AxiosRequestHeaders } from "axios";

function createHookTrigger<response, request = any>({
  baseURL,
  timeout,
  headers,
}: {
  baseURL: string;
  timeout?: number;
  headers?: AxiosRequestHeaders;
}) {
  const triggerRequest = axios.create({
    baseURL,
    timeout,
    headers,
  });
  const triggeGet = <T = any>(path: string, config?: AxiosRequestConfig<T>) => {
    return triggerRequest.get<request, response, T>(path, config);
  };

  const triggePost = <T = any>(
    path: string,
    data: typeof JSON,
    config?: AxiosRequestConfig<T>
  ) => {
    return triggerRequest.post<request, response>(path, data, config);
  };
  return {
    interceptors: triggerRequest.interceptors,
    triggeGet,
    triggePost,
  };
}

export default {
  createHookTrigger,
};
