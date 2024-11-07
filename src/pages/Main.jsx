import React from 'react';

import Quest from '../components/Quest/Quest';
import axios from 'axios';
import { getDateLocalStorage, setDateLocalStorage } from '../utils/getDateLocalStorage';
import PostForm from '../components/PostForm';
import ListToDO from '../components/ListToDO';
import MyModal from '../components/UI/MyModal';
import MyButton from '../components/MyButton';
import { modalContext } from '../App';

const Main = () => {
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    setDateLocalStorage();
  }, []);

  React.useEffect(() => {
    axios
      .get('https://670ce84d7e5a228ec1d1dad4.mockapi.io/todo')
      .then((res) => {
        setItems(res.data);
      })
      .catch((err) => {
        console.log(err);
        setItems([]);
      });
  }, []);

  const addQuest = (newQuest) => {
    setItems([...items, newQuest]);
    axios.post(`https://670ce84d7e5a228ec1d1dad4.mockapi.io/todo`, {
      id: newQuest.id,
      name: newQuest.name,
      done: newQuest.done,
    });
  };
  const callAxiosOk = (id, done) => {
    axios.put(`https://670ce84d7e5a228ec1d1dad4.mockapi.io/todo/${id}`, {
      id: id,
      done: done,
    });
  };

  const itemQuests = items.map((item) => {
    return <Quest key={item.id} {...item} callAxiosOk={callAxiosOk} />;
  });

  const { visableModal, setVisableModal, coorXY, questId } = React.useContext(modalContext);

  const clickDelete = () => {
    setItems(items.filter((item) => item.id !== questId.current));
    setVisableModal(false);
    axios.delete(`https://670ce84d7e5a228ec1d1dad4.mockapi.io/todo/${questId.current}`);
  };

  return (
    <div className='main'>
      <h1 className='title'>todos</h1>
      <span className='lastLoginTime'>Start: {getDateLocalStorage()}</span>
      <div className='windows'>
        <PostForm addQuest={addQuest} />
        <ListToDO itemQuests={itemQuests} />
      </div>
      <MyModal visable={visableModal} setVisable={setVisableModal}>
        <MyButton x={coorXY.current.x} y={coorXY.current.y} onClick={clickDelete}>
          Удалить
        </MyButton>
      </MyModal>
    </div>
  );
};

export default Main;
