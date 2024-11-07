import React from 'react';

const ListToDO = ({ itemQuests }) => {
  if (itemQuests.length) {
    return <div className='listtodo'>{itemQuests}</div>;
  }
  return <div>NICEGO</div>;
};

export default ListToDO;
