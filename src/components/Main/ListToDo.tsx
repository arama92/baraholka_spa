import React from 'react';

type lisToDoProps = {
  children: JSX.Element[];
};

const ListToDo: React.FC<lisToDoProps> = ({ children }) => {
  if (children.length) {
    return <div className='listtodo'>{children}</div>;
  }
  return <div>NICEGO</div>;
};

export default ListToDo;
