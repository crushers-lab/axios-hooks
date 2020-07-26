[license]:https://img.shields.io/npm/l/@crushers-lab/axios-hooks
[version]:https://img.shields.io/npm/v/@crushers-lab/axios-hooks
[npm-url]: https://www.npmjs.com/package/@crushers-lab/axios-hooks
[size]: https://packagephobia.now.sh/badge?p=@crushers-lab/axios-hooks
[size-url]: https://packagephobia.now.sh/result?p=@crushers-lab/axios-hooks

# Axios Hooks
[![npm][version]][npm-url]
[![license][license]][npm-url]
[![size][size]][size-url]


## Requirements
Requires 
* [React](https://github.com/facebook/react) minimum 16.8.0
* [Axios](https://github.com/axios/axios)
* [Prop Types](https://github.com/facebook/prop-types)

## Install

```bash
npm i @crushers-lab/axios-hooks
```
OR
```bash
yarn add @crushers-lab/axios-hooks
```

## Dependencies if not installed
```bash
npm i react axios prop-types
```
OR
```bash
yarn add react axios prop-types
```

## Usage

### Provide axios instance at root

```jsx
import { AxiosProvider } from "@crushers-lab/axios-hooks";
import Axios from 'axios';

const connector = Axios.create();

function App() {
  return (
    <AxiosProvider connector={connector}>
      ...
      <ExampleComponent />
    </AxiosProvider>
  )
}
```

### Using hooks

```jsx
import {useGet} from '@crushers-lab/axios-hooks';
function ExampleComponent() {
  const [data, error, isLoading, status, reload ] = useGet('/user');
  if(isLoading) {
    return <div>Loading...</div>;
  }
  if(error) {
    return <div>{error}</div>;
  }
  
  return <div>{data}</div>
}
```
### Using Callback Methods

```jsx
import {usePostCallback} from '@crushers-lab/axios-hooks';
function MyComponent() {
  const postData = usePostCallback('/user');
  const onSubmit = ()=>{
      const data = {};
      postData({data}).then(console.log).catch(console.error);
      // Business logic
  }
  
  return <button onClick={onSubmit}>Submit</button>
}
```

### Using Response Providers

```jsx
import {AxiosGet, useAxiosData, useAxiosError} from "@crushers-lab/axios-hooks";
function MyComponent() {
  return (
    <AxiosGet url="/user" fallback={<div>Loading...</div>}>
      <RenderUser />
    </AxiosGet>
  )
}

function RenderUser() {
  const user = useAxiosData();
  const error = useAxiosError();
  
  if(error) {
    return <div>{error}</div>;
  }
  
  return <div>{user.name}</div>
}
```
