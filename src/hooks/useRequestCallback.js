import {useAxios} from '../contexts';
import {useCallback} from 'react';

export function useRequestCallback(url, method, config = {}) {
  const connector = useAxios();

  return useCallback(() => {
    return async (conf) => {
      try {
        const response = await connector.request({url, method, ...config, ...conf});
        return {
          data: response.data,
          status: response.status,
        };
      } catch (e) {
        const error = e.response ? e.response.data : e.message;
        const status = e.response ? e.response.status : 0;
        return {
          error,
          status,
        };
      }
    };
  }, [url, method, JSON.stringify(config), connector]);
}

export const useGetCallback = (url, params = {}, config = {}) => useRequestCallback(url, 'GET', {...config, params});
export const usePostCallback = (url, data = {}, config = {}) => useRequestCallback(url, 'POST', {...config, data});
export const usePatchCallback = (url, data = {}, config = {}) => useRequestCallback(url, 'PATCH', {...config, data});
export const usePutCallback = (url, data = {}, config = {}) => useRequestCallback(url, 'PUT', {...config, data});
export const useDeleteCallback = (url, data = {}, config = {}) => useRequestCallback(url, 'DELETE', {...config, data});
