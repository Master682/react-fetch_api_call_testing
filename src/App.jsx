import { useFetch } from './useFetch';
import './App.css';

function App() {
  const {data, loading} = useFetch("https://jsonplaceholder.typicode.com/users")

  return (
    <>
      <h1>HOLA</h1>
      <ul>
        {loading && <li>Loading...</li>}
        {data?.map((user) => (<li key={user.id}>{user.name}</li>))}
      </ul>
    </>
  )
}

export default App
