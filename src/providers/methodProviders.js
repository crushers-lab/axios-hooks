/* eslint-disable react/no-multi-comp */
import PropTypes from 'prop-types';
import React from 'react';
import {AxiosRequest} from './requestProvider';

const commonProps = {
  url: PropTypes.string.isRequired,
  config: PropTypes.object,
  fallback: PropTypes.element,
  children: PropTypes.node.isRequired,
};

const commonDefaultProps = {
  config: {},
  fallback: null,
};

export const AxiosGet = ({config, params, ...rest}) => {
  return <AxiosRequest {...rest} config={{...config, params}} method={'GET'}/>;
};

AxiosGet.propTypes = {
  ...commonProps,
  params: PropTypes.object,
};

AxiosGet.defaultProps = {
  ...commonDefaultProps,
  params: {},
};


export const AxiosPost = ({config, data, ...rest}) => {
  return <AxiosRequest {...rest} config={{...config, data}} method={'POST'}/>;
};

AxiosPost.propTypes = {
  ...commonProps,
  data: PropTypes.any,
};

AxiosPost.defaultProps = {
  ...commonDefaultProps,
  data: undefined,
};

export const AxiosPut = ({config, data, ...rest}) => {
  return <AxiosRequest {...rest} config={{...config, data}} method={'PUT'}/>;
};

AxiosPut.propTypes = {
  ...commonProps,
  data: PropTypes.any,
};

AxiosPut.defaultProps = {
  ...commonDefaultProps,
  data: undefined,
};


export const AxiosPatch = ({config, data, ...rest}) => {
  return <AxiosRequest {...rest} config={{...config, data}} method={'PATCH'}/>;
};

AxiosPatch.propTypes = {
  ...commonProps,
  data: PropTypes.any,
};

AxiosPatch.defaultProps = {
  ...commonDefaultProps,
  data: undefined,
};

export const AxiosDelete = ({config, data, ...rest}) => {
  return <AxiosRequest {...rest} config={{...config, data}} method={'PATCH'}/>;
};

AxiosDelete.propTypes = {
  ...commonProps,
  data: PropTypes.any,
};

AxiosDelete.defaultProps = {
  ...commonDefaultProps,
  data: undefined,
};
