import PropTypes from 'prop-types';
import {AxiosResponseContext} from '../contexts';
import React from 'react';
import {useRequest} from '../hooks';

export function AxiosRequest({url, method, config, fallback, children}) {
  const [data, error, isLoading, status, reload] = useRequest(url, method, config);
  if (isLoading && fallback) {
    return fallback;
  }
  return (
    <AxiosResponseContext.Provider value={{data, error, isLoading, status, reload}}>
      {children}
    </AxiosResponseContext.Provider>
  );
}

AxiosRequest.propTypes = {
  url: PropTypes.string.isRequired,
  method: PropTypes.string,
  config: PropTypes.object,
  fallback: PropTypes.element,
  children: PropTypes.node.isRequired,
};

AxiosRequest.defaultProps = {
  method: 'GET',
  config: {},
  fallback: null,
};

