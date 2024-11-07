import React from 'react';
import styles from './Radioinput.module.scss';

const Radioinput = ({ checked }) => {
  const onCheck = (e) => {};

  return (
    <>
      <input type='checkbox' className={styles.input} checked={checked} onChange={onCheck} />
      <span className={styles.span}></span>
    </>
  );
};

export default Radioinput;
