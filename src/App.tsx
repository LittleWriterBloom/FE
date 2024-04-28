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
  CreateParams,
  MyCharacters,
  Personality,
  GuideFirst,
  GuideSecond,
  GuideThird,
  Stage,
  Save,
  Completion,
  MyStories,
  Read,
  Create,
  Title,
  Author,
  DrawAi,
  CreateAI,
  CreateAIParams,
} from './pages';
import { Canvas } from './pages/Character/Draw/Canvas';
import { Test } from './pages/Test/Test';
import { TestParams } from './pages/Test/TestParams';

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
        <Route path='/character/drawai' element={<DrawAi />} />
        <Route path='/character/naming' element={<Naming />} />
        <Route path='/character/personality' element={<Personality />} />
        <Route path='/character/complete' element={<Complete />} />
        <Route path='/character/mycharacters' element={<MyCharacters />} />
        <Route path='/story' element={<Story />} />
        <Route path='/story/stage' element={<Stage />} />
        <Route path='/story/create' element={<Create />} />
        <Route path='/story/create/:pageId' element={<CreateParams />} />
        <Route path='/story/createai' element={<CreateAI />} />
        <Route path='/story/createai/:pageId' element={<CreateAIParams />} />
        <Route path='/story/title' element={<Title />} />
        <Route path='/story/author' element={<Author />} />
        <Route path='/story/save' element={<Save />} />
        <Route path='/story/completion' element={<Completion />} />
        <Route path='/story/read' element={<Read />} />
        <Route path='/mystories' element={<MyStories />} />
        <Route path='/story/test' element={<Test />} />
        <Route path='/story/test/:testId' element={<TestParams />} />
        <Route path='/*' element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
