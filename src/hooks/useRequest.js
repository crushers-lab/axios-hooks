import {useAxios} from '../contexts';
import {useCallback, useEffect, useState} from 'react';

export function useRequest(url, method, config = {}) {
  const [state, setState] = useState({
    isLoading: true,
    data: null,
    error: null,
    status: null,
  });
  const connector = useAxios();

  const fetch = useCallback(async () => {
    try {
      setState(s => ({
        ...s,
        isLoading: true,
      }));
      const response = await connector.request({url, method, ...config});
      setState(s => ({
        ...s,
        isLoading: false,
        data: response.data,
        status: response.status,
      }));
    } catch (e) {
      const error = e.response ? e.response.data : e.message;
      const status = e.response ? e.response.status : 0;
      setState(s => ({
        ...s,
        isLoading: false,
        error,
        status,
      }));
    }
  }, [url, method, JSON.stringify(config), connector]);

  useEffect(() => {
    fetch();
  }, [fetch]);

  return [state.data, state.error, state.isLoading, state.status, fetch];
}

export const useGet = (url, params = {}, config = {}) => useRequest(url, 'GET', {...config, params});
export const usePost = (url, data = {}, config = {}) => useRequest(url, 'POST', {...config, data});
export const usePatch = (url, data = {}, config = {}) => useRequest(url, 'PATCH', {...config, data});
export const usePut = (url, data = {}, config = {}) => useRequest(url, 'PUT', {...config, data});
export const useDelete = (url, data = {}, config = {}) => useRequest(url, 'DELETE', {...config, data});
