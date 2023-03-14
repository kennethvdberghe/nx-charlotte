import { get } from '@nx-charlotte/http';

export const getFakeJSON = () => {
  return get('https://jsonplaceholder.typicode.com/todos/2').then((res) =>
    res.json()
  );
};

export const helloWorld = () => {
  return 'Hello World';
};
