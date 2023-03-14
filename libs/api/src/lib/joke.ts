import { get } from '@nx-charlotte/http';

export const getJoke = () => {
  return get('https://api.chucknorris.io/jokes/random').then((res) =>
    res.json()
  );
};
