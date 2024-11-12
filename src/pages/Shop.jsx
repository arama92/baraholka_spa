import axios from 'axios';
import React from 'react';
import Currency from '../components/Currency';

import { useSelector, useDispatch } from 'react-redux';
import { featchCurrencyJs, selectCurrencyJs } from '../redux/slices/CurrencyJsSlice';
import { getCurrencyLocalStorage } from '../utils/getCurrencyLocalStorage';
import HeaderShop from '../components/HeaderShop';
import { selectCartCurrency } from '../redux/slices/cartCurrencySlice';

const Shop = () => {
  const dispatch = useDispatch();
  // const { itemsJs } = useSelector((state) => state.currencyJs); // get
  const { itemsJs } = useSelector(selectCurrencyJs); // get

  React.useEffect(() => {
    dispatch(featchCurrencyJs());
  }, []);

  const Currencys = Object.values(itemsJs).map((item) => (
    <Currency key={item.ID} name={item.Name} previous={item.Previous} current={item.Value} />
  ));

  return (
    <div className='shop'>
      <HeaderShop />
      <div className='shopList'>{Currencys}</div>
    </div>
  );
};
export default Shop;
