import React from 'react';
import './styles/App.scss';
import Main from './pages/Main';
import Shop from './pages/Shop';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { setNavigateLocalStorage } from './utils/setNavigateLocalStorage';
import Header from './components/Header';
import Captcha from './pages/Captcha';

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  React.useEffect(() => {
    if (location.pathname === '/') {
      setNavigateLocalStorage('main');
      navigate('main');
    }
  }, []);

  return (
    <div className='App'>
      <Header />

      <div className='content'>
        <Routes>
          <Route path='/main' element={<Main />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/captcha' element={<Captcha />} />
          <Route path='*' element={<h1>404</h1>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
