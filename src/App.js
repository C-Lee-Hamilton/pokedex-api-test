import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import './App.css';

import { ErrorPage } from './pages/ErrorPage';
import { PokemonPage } from './pages/PokemonPage';

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
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} errorElement={<ErrorPage/>} />
          <Route path="pokemon/:pokemonId" element={<PokemonPage />} />
        </Routes>
      </BrowserRouter>
    </div>
   
  );
}

export default App;
