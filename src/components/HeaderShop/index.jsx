import React from 'react';
import styles from './HeaderShop.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { selectCartCurrency } from '../../redux/slices/cartCurrencySlice';
import { setFavorite } from '../../redux/slices/currencyFavoriteSlice';

const HeaderShop = () => {
  const { itemsCurrency } = useSelector(selectCartCurrency);
  const isMounted = React.useRef(false);

  const dispacth = useDispatch();
  const [_favorite, _setFavorite] = React.useState(false);

  React.useEffect(() => {
    if (isMounted.current) {
      localStorage.setItem('cartCurrency', itemsCurrency);
    }
    isMounted.current = true;
  }, [itemsCurrency]);

  const clickFavorite = () => {
    _setFavorite(!_favorite);
    dispacth(setFavorite(!_favorite));
  };

  return (
    <div className={styles.shopHeader}>
      <button onClick={clickFavorite}>
        {_favorite
          ? 'Назад'
          : 'Отслеживаемые ' +
            `${itemsCurrency && itemsCurrency.length ? itemsCurrency.length : 0}`}
      </button>
    </div>
  );
};
export default HeaderShop;
