import React from 'react';
import './styles/App.scss';
import Main from './pages/Main';
import Shop from './pages/Shop';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { setNavigateLocalStorage } from './utils/navigateLocalStorage';

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
      <Link to='/main' className='linkHeader'>
        todos
      </Link>
      <Link to='/shop' className='linkHeader'>
        shop
      </Link>
      <div className='content'>
        <Routes>
          <Route path='/main' element={<Main />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='*' element={<h1>404</h1>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
