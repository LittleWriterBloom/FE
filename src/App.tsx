import { HashRouter, Routes, Route } from 'react-router-dom';
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
  MyCharacters,
  Personality,
  Stage,
  Save,
  Completion,
  MyStories,
  Read,
  Title,
  Author,
  DrawAi,
  ReadAI,
  CreateF,
  CreateParamsF,
  Descript,
  CompareAi,
  ReadQR,
  ReadShare,
} from './pages';
import { Canvas } from './pages/Character/Draw/Canvas';
import { Test } from './pages/Test/Test';
import { TestParams } from './pages/Test/TestParams';
import { Test02 } from './pages/Test/Test02';
import { Test03 } from './pages/Test/Test03';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/canvas' element={<Canvas />} />
        <Route path='/login' element={<Login />} />
        <Route path='/logout' element={<Logout />} />
        <Route path='/join' element={<Join />} />
        <Route path='/character' element={<Character />} />
        <Route path='/character/draw' element={<DrawAi />} />
        <Route path='/character/drawai' element={<Draw />} />
        <Route path='/character/descript' element={<Descript />} />
        <Route path='/character/compareai' element={<CompareAi />} />
        <Route path='/character/naming' element={<Naming />} />
        <Route path='/character/personality' element={<Personality />} />
        <Route path='/character/complete' element={<Complete />} />
        <Route path='/character/mycharacters' element={<MyCharacters />} />
        <Route path='/story' element={<Story />} />
        <Route path='/story/stage' element={<Stage />} />
        {/* <Route path='/story/createold' element={<CreateOld />} />
        <Route path='/story/createold/:pageId' element={<CreateParamsOld />} /> */}
        <Route path='/story/create' element={<CreateF />} />
        <Route path='/story/create/:pageId' element={<CreateParamsF />} />
        <Route path='/story/title' element={<Title />} />
        <Route path='/story/author' element={<Author />} />
        <Route path='/story/save' element={<Save />} />
        <Route path='/story/completion' element={<Completion />} />
        <Route path='/story/read' element={<Read />} />
        <Route path='/story/readai' element={<ReadAI />} />
        <Route path='/story/readai/:uuid' element={<ReadQR />} />
        <Route path='/story/read/:uuid' element={<ReadShare />} />
        <Route path='/mystories' element={<MyStories />} />
        <Route path='/test' element={<Test />} />
        <Route path='/test02' element={<Test02 />} />
        <Route path='/test03' element={<Test03 />} />
        <Route path='/test/:testId' element={<TestParams />} />
        <Route path='/*' element={<Home />} />
      </Routes>
    </HashRouter>
  );
}

export default App
