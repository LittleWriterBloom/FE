import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Character, Home, Draw, Naming, Login } from './pages';
import { Canvas } from './pages/Character/Draw/Canvas';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/character' element={<Character />} />
        <Route path='/character/draw' element={<Draw />} />
        <Route path='/character/naming' element={<Naming />} />
        <Route path='/*' element={<Home />} />
        <Route path='/canvas' element={<Canvas />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
