import React from 'react';
import styles from './HeaderShop.module.scss';
import { getCurrencyLocalStorage } from '../../utils/getCurrencyLocalStorage';
import { useSelector } from 'react-redux';
import { selectCartCurrency } from '../../redux/slices/cartCurrencySlice';

const HeaderShop = () => {
  const { itemsCurrency } = useSelector(selectCartCurrency);
  const isMounted = React.useRef(false);

  React.useEffect(() => {
    if (isMounted.current) {
      localStorage.setItem('cartCurrency', itemsCurrency);
    }
    isMounted.current = true;
  }, [itemsCurrency]);

  return (
    <div className={styles.shopHeader}>
      <button>
        Отслеживаемые{' '}
        <span>{itemsCurrency && itemsCurrency.length ? itemsCurrency.length : 0}</span>
      </button>
    </div>
  );
};
export default HeaderShop;
