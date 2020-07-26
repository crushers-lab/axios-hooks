import {useContext} from 'react';
import {AxiosResponseContext} from '../contexts';

export function useAxiosResponse() {
  return useContext(AxiosResponseContext);
}

export function useAxiosResponseKey(key) {
  const {[key]: value} = useAxiosResponse();
  return value;
}

export const useAxiosData = defaultValue => useAxiosResponseKey('data') || defaultValue;
export const useAxiosStatus = () => useAxiosResponseKey('status');
export const useAxiosIsLoading = () => useAxiosResponseKey('isLoading');
export const useAxiosError = () => useAxiosResponseKey('error');
export const useAxiosReload = () => useAxiosResponseKey('reload');
