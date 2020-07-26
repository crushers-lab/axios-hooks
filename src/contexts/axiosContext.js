import {createContext, useContext} from 'react';
import Axios from 'axios';

export const AxiosContext = createContext(Axios);

export function useAxios() {
  return useContext(AxiosContext);
}
