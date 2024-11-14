import React from 'react';
import styles from './Currency.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import {
  addItem,
  removeItem,
  selectCartCurrencyByName,
} from '../../redux/slices/cartCurrencySlice';
import clsx from 'clsx';

const Currency = ({ name, previous, current }) => {
  const dispatch = useDispatch();

  const favoriteStatus = useSelector((state) => state.currencyFavorite);
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

  const cStyle = clsx({
    [styles.root]: true,
    [styles['root-none']]: favoriteStatus.favorite,
    [styles['root-active']]: active,
  });

  return (
    <div className={cStyle}>
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
