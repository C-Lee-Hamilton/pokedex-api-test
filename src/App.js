import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import './App.css';

import { ErrorPage } from './pages/ErrorPage';
import { PokemonPage } from './pages/PokemonPage';
import { PokeDex } from './components/PokeDex';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App/>,
//     errorElement: <ErrorPage/>,
//   },
//   {
//     path: "pokemon/:pokemonId",
//     element: <PokemonPage/>,
//   }
// ]);

function App() {
  return (
  
    <div className="App">
      <PokeDex>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>} errorElement={<ErrorPage/>} />
            <Route path="pokemon/:pokemonId" element={<PokemonPage />} />
          </Routes>
        </BrowserRouter>
      </PokeDex>
    </div>
   
  );
}

export default App;
