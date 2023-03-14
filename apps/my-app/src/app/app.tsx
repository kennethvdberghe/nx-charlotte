import { getFakeJSON } from '@nx-charlotte/api';
import { useQuery } from '@tanstack/react-query';

export function App() {
  const query = useQuery({ queryKey: ['todos'], queryFn: getFakeJSON });

  return <div>{JSON.stringify(query.data)}</div>;
}

export default App;
