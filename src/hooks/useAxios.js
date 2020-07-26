import {useContext} from 'react';
import {AxiosContext} from '../contexts';

export function useAxios() {
  return useContext(AxiosContext);
}
