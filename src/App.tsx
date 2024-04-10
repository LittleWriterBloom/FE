import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { 
  Character, 
  Home, 
  Draw, 
  Naming, 
  Login, 
  Join, 
  Complete, 
  Story,
  Logout,
  Create,
  MyCharacters,
  Personality,
  GuideFirst,
  GuideSecond,
  GuideThird,
  Create2
} from './pages';
import { Canvas } from './pages/Character/Draw/Canvas';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/logout' element={<Logout />} />
        <Route path='/join' element={<Join />} />
        <Route path='/guide-first' element={<GuideFirst />} />
        <Route path='/guide-second' element={<GuideSecond />} />
        <Route path='/guide-third' element={<GuideThird />} />
        <Route path='/character' element={<Character />} />
        <Route path='/character/draw' element={<Draw />} />
        <Route path='/character/naming' element={<Naming />} />
        <Route path='/character/personality' element={<Personality />} />
        <Route path='/character/complete' element={<Complete />} />
        <Route path='/character/mycharacters' element={<MyCharacters />} />
        <Route path='/story' element={<Story />} />
        <Route path='/story/create' element={<Create />} />
        <Route path='/story/create/2' element={<Create2 />} />
        <Route path='/canvas' element={<Canvas />} />
        <Route path='/*' element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
