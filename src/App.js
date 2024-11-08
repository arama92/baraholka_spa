import React from 'react';
import './styles/App.scss';
import Main from './pages/Main';
import Shop from './pages/Shop';
import { Routes, Route, Link } from 'react-router-dom';

export const modalContext = React.createContext('');

function App() {
  const [visableModal, setVisableModal] = React.useState(false);
  const coorXY = React.useRef({ x: 0, y: 0 });
  const questId = React.useRef(-1);

  return (
    <div className='App'>
      <Link to='/' className='linkHeader'>
        todos
      </Link>
      <Link to='/shop' className='linkHeader'>
        shop
      </Link>
      <div className='content'>
        <modalContext.Provider value={{ visableModal, setVisableModal, coorXY, questId }}>
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/shop' element={<Shop />} />
            <Route path='*' element={<h1>404</h1>} />
          </Routes>
        </modalContext.Provider>
      </div>
    </div>
  );
}

export default App;
