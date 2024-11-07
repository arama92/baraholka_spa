import React from 'react';
import './styles/App.scss';
import Main from './pages/Main';

export const modalContext = React.createContext('');

function App() {
  const [visableModal, setVisableModal] = React.useState(false);
  const coorXY = React.useRef({ x: 0, y: 0 });
  const questId = React.useRef(-1);

  return (
    <div className='App'>
      <modalContext.Provider value={{ visableModal, setVisableModal, coorXY, questId }}>
        <Main />
      </modalContext.Provider>
    </div>
  );
}

export default App;
