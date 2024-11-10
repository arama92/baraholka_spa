import axios from 'axios';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { setNavigateLocalStorage } from '../utils/navigateLocalStorage';

const Shop = () => {
  const go = () => {
    axios
      .get('https://www.cbr-xml-daily.ru/daily_json.js')
      .then((res) => {
        console.log(res);

        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className='shop'>
      <div className='shopHeader'>
        <input type='text' placeholder='Поиск' className='shopFind' />

        <button className='shopCurrency'>
          Следим за <span>0</span>
        </button>
        {/* <div className='shopCurrency'>валюты</div> */}
      </div>
      <div className='shopList'>
        <div className='shopItem'>
          <div>1</div>
        </div>
        <div className='shopItem'>
          <div>2</div>
        </div>
      </div>
    </div>
  );
};
export default Shop;
