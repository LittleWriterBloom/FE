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
  CreateThree,
  MyCharacters,
  Personality,
  GuideFirst,
  GuideSecond,
  GuideThird,
  CreateThree2,
  Stage,
  CreateThree3,
  TitleThree,
  Save,
  Completion,
  MyStories,
  Read
} from './pages';
import { Canvas } from './pages/Character/Draw/Canvas';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/canvas' element={<Canvas />} />
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
        <Route path='/story/stage' element={<Stage />} />
        <Route path='/story/create-three' element={<CreateThree />} />
        <Route path='/story/create-three/2' element={<CreateThree2 />} />
        <Route path='/story/create-three/3' element={<CreateThree3 />} />
        <Route path='/story/title-three' element={<TitleThree />} />
        <Route path='/story/save' element={<Save />} />
        <Route path='/story/completion' element={<Completion />} />
        <Route path='/story/read' element={<Read />} />
        <Route path='/story/mystories' element={<MyStories />} />
        <Route path='/*' element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
