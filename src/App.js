import './App.css';
import { Routes, Route } from 'react-router-dom'
//pages
import Home from './pages/Home-Page';
import Repositories from './pages/Repositories';
import NewRepo from './pages/NewRepo';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/repositories' element={<Repositories/>}/>
      <Route path='/new' element={<NewRepo/>}/>
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}

export default App;
