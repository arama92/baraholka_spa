import React from 'react';
import styles from './MyModal.module.scss';

const MyModal = ({ children, visable, setVisable }) => {
  const rootClasses = [styles.MyModal];
  if (visable) {
    rootClasses.push(styles.active);
  }

  return (
    <div className={rootClasses.join(' ')} onClick={() => setVisable(false)}>
      <div onClick={(e) => e.stopPropagation()}>{children}</div>
    </div>
  );
};
export default MyModal;
