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
    const quest = localStorage.getItem('quest');
    if (!quest) {
      axios
        .get('Quest.json')
        .then((res) => {
          setItems(res.data);
          localStorage.setItem('quest', JSON.stringify(res.data));
        })
        .catch((err) => {
          console.log(err);
          setItems([]);
        });
    } else {
      setItems(JSON.parse(quest));
    }
  }, []);

  const addQuest = (newQuest) => {
    setItems([...items, newQuest]);
    localStorage.setItem('quest', JSON.stringify([...items, newQuest]));
  };

  const itemQuests = items.map((item) => {
    return <Quest key={item.id} {...item} />;
  });

  const { visableModal, setVisableModal, coorXY, questId } = React.useContext(modalContext);

  const clickDelete = () => {
    setItems(items.filter((item) => item.id !== questId.current));
    setVisableModal(false);
    localStorage.setItem(
      'quest',
      JSON.stringify(items.filter((item) => item.id !== questId.current)),
    );
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
