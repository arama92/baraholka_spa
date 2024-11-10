import React from 'react';

type lisToDoProps = {
  itemQuests: JSX.Element[];
};

const ListToDo: React.FC<lisToDoProps> = ({ itemQuests }) => {
  if (itemQuests.length) {
    return <div className='listtodo'>{itemQuests}</div>;
  }
  return <div>NICEGO</div>;
};

export default ListToDo;
