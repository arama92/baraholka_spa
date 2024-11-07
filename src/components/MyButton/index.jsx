import React from 'react';
import styles from './MyButton.module.scss';

const MyButton = ({ children, x, y, onClick }) => {
  return (
    <button className={styles.button} onClick={onClick} style={{ left: x, top: y }}>
      <span>{children}</span>
    </button>
  );
};
export default MyButton;
