import React from 'react';
import styles from './Currency.module.scss';

const Currency = ({ name, previous, current }) => {
  const [active, setActive] = React.useState(false);

  const clickButton = () => {
    setActive(!active);

    // if (!localStorage.getItem('currency')) {
    //   localStorage.setItem('currency', name);
    //   return;
    // }

    // const _currencys = localStorage.getItem('currency').split(',');

    // if (!active) {
    //   _currencys.push(name);
    // } else {
    //   _currencys.forEach((item, index) => {
    //     if (item === name) {
    //       _currencys.splice(index, 1);
    //     }
    //   });
    // }
    // localStorage.setItem('currency', _currencys.join(','));
  };

  return (
    <div className={styles.root + ' ' + (active ? styles['root-active'] : '')}>
      <div>
        <span>{name}</span>
        <hr />
        <span>Вчера: {previous.toFixed(2)}</span>
        <hr />
        <span className={current >= previous ? 'upgrade' : 'downgrade'}>{current.toFixed(2)}</span>
      </div>
      <button onClick={clickButton}>{!active ? '+' : '-'}</button>
    </div>
  );
};
export default Currency;
