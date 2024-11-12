import React from 'react';
import styles from './Currency.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import {
  addItem,
  removeItem,
  selectCartCurrencyByName,
} from '../../redux/slices/cartCurrencySlice';

const Currency = ({ name, previous, current }) => {
  const dispatch = useDispatch();

  const [active, setActive] = React.useState(false);

  const clickButton = () => {
    if (!active) {
      dispatch(addItem(name));
    } else {
      dispatch(removeItem(name));
    }
    setActive(!active);
  };

  const itemCurrency = useSelector(selectCartCurrencyByName(name));
  React.useEffect(() => {
    if (itemCurrency) {
      setActive(true);
    }
  }, []);

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
