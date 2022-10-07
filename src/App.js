import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';
import Landingpage from './pages/Landingpage';
import Detailpage from './pages/Detailpage'
import Adminpage from './pages/Adminpage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landingpage/>} />
        <Route path='/detail/:id' element={<Detailpage/>} />
        <Route path='/admin' element={<Adminpage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
