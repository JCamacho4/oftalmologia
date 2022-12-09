import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Clientes from './components/Clientes/Clientes';
import Revisiones from './components/Revisiones/Revisiones';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Clientes />,
  },
  {
    path: "/:cliente",
    element: <Revisiones />,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
