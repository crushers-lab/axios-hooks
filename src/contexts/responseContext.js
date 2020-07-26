import {createContext} from 'react';

export const AxiosResponseContext = createContext({
  isLoading: true,
  data: null,
  error: null,
  status: null,
  reload: null,
});

