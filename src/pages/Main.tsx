import React, { useRef } from 'react';
import Quest from '../components/Quest/Quest';
import PostFormQuest from '../components/Main/PostFormQuest';
import ListToDo from '../components/Main/ListToDo';
import MyModal from '../components/UI/MyModal';
import MyButton from '../components/MyButton';
import axios from 'axios';
import { getDateLocalStorage, setDateLocalStorage } from '../utils/getDateLocalStorage';
import { CoorXY, quest } from '../@types/questTypes';

export const modalContext = React.createContext<any>('');

const Main: React.FC = () => {
  const [visableModal, setVisableModal] = React.useState<boolean>(false);
  const coorXY = React.useRef<CoorXY>({ x: 0, y: 0 });
  const questId = React.useRef<number>(-1);

  const [items, setItems] = React.useState<quest[]>([]);

  React.useEffect(() => {
    setDateLocalStorage();
  }, []);

  const _errorConnect = useRef<boolean>(false);
  React.useEffect(() => {
    axios
      .get('https://670ce84d7e5a228ec1d1dad4.mockapi.io/todo')
      .then((res) => {
        setItems(res.data);
      })
      .catch((err) => {
        console.log(err);
        _errorConnect.current = true;
      });
  }, []);

  const addQuest = (newQuest: quest) => {
    const fixMockApi: quest = {
      id: Number(items[items.length - 1].id) + 1,
      name: newQuest.name,
      done: newQuest.done,
    };
    axios
      .post(`https://670ce84d7e5a228ec1d1dad4.mockapi.io/todo`, {
        id: fixMockApi.id,
        name: fixMockApi.name,
        done: fixMockApi.done,
      })
      .then(() => {
        setItems([...items, fixMockApi]);
      });
  };

  const callAxiosOk = (id: number, done: boolean) => {
    axios.put(`https://670ce84d7e5a228ec1d1dad4.mockapi.io/todo/${id}`, {
      id: id,
      done: done,
    });
  };

  const itemQuests = items.map((item) => {
    return <Quest key={item.id} {...item} callAxiosOk={callAxiosOk} />;
  });

  const clickDelete = () => {
    axios.delete(`https://670ce84d7e5a228ec1d1dad4.mockapi.io/todo/${questId.current}`).then(() => {
      setItems(items.filter((item) => item.id !== questId.current));
    });
    setVisableModal(false);
  };

  return (
    <div className='main'>
      <modalContext.Provider value={{ visableModal, setVisableModal, coorXY, questId }}>
        <h1 className='title'>todos</h1>
        <span className='lastLoginTime'>Start: {getDateLocalStorage()}</span>
        <div className='windows'>
          {_errorConnect.current ? (
            <h1>Нет соединения</h1>
          ) : (
            <>
              <PostFormQuest addQuest={addQuest} />
              <ListToDo>{itemQuests}</ListToDo>
            </>
          )}
        </div>
        <MyModal visable={visableModal} setVisable={setVisableModal}>
          <MyButton x={coorXY.current.x} y={coorXY.current.y} onClick={clickDelete}>
            Удалить
          </MyButton>
        </MyModal>
      </modalContext.Provider>
    </div>
  );
};

export default Main;
