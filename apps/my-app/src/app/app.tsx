import { getFakeJSON, getJoke } from '@nx-charlotte/api';
import { useQuery } from '@tanstack/react-query';

export function App() {
  const query = useQuery({ queryKey: ['todos'], queryFn: getFakeJSON });
  const jokeQuery = useQuery({ queryKey: ['joke'], queryFn: getJoke });

  return (
    <div>
      <p>{JSON.stringify(query.data)}</p>
      <p>{JSON.stringify(jokeQuery.data?.value)}</p>
    </div>
  );
}

export default App;
