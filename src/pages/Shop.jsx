import axios from 'axios';
import React from 'react';

const Shop = () => {
  const go = () => {
    axios
      .get('https://www.cbr-xml-daily.ru/daily_json.js')
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  go();
  return (
    <div className='shop'>
      <div className='shopHeader'>
        <input type='text' placeholder='Поиск' className='shopHeader__shopFind' />
        <button className='shopHeader__shopCurrency'>
          Следим за <span>0</span>
        </button>
      </div>
      <div className='shopList'>
        <div className='shopItem'>
          <div className='shopItem__leftColoumn'>
            <span className='shopItem__name'>NAME</span>
            <hr />
            <span className='shopItem__previous'>Пред</span>
            <hr />
            <span className='shopItem__current'>Текущее</span>
          </div>
          <button className='shopItem__buttonAdd'>+</button>
        </div>
        <div className='shopItem'>
          <div className='shopItem__leftColoumn'>
            <span className='shopItem__name'>NAME</span>
            <hr />
            <span className='shopItem__previous'>Пред</span>
            <hr />
            <span className='shopItem__current'>Текущее</span>
          </div>
          <button className='shopItem__buttonAdd'>+</button>
        </div>
        <div className='shopItem'>
          <div className='shopItem__leftColoumn'>
            <span className='shopItem__name'>NAME</span>
            <hr />
            <span className='shopItem__previous'>Пред</span>
            <hr />
            <span className='shopItem__current'>Текущее</span>
          </div>
          <button className='shopItem__buttonAdd'>+</button>
        </div>
        <div className='shopItem'>
          <div className='shopItem__leftColoumn'>
            <span className='shopItem__name'>NAME</span>
            <hr />
            <span className='shopItem__previous'>Пред</span>
            <hr />
            <span className='shopItem__current'>Текущее</span>
          </div>
          <button className='shopItem__buttonAdd'>+</button>
        </div>
        <div className='shopItem'>
          <div className='shopItem__leftColoumn'>
            <span className='shopItem__name'>NAME</span>
            <hr />
            <span className='shopItem__previous'>Пред</span>
            <hr />
            <span className='shopItem__current'>Текущее</span>
          </div>
          <button className='shopItem__buttonAdd'>+</button>
        </div>
        <div className='shopItem'>
          <div className='shopItem__leftColoumn'>
            <span className='shopItem__name'>NAME</span>
            <hr />
            <span className='shopItem__previous'>Пред</span>
            <hr />
            <span className='shopItem__current'>Текущее</span>
          </div>
          <button className='shopItem__buttonAdd'>+</button>
        </div>
        <div className='shopItem'>
          <div className='shopItem__leftColoumn'>
            <span className='shopItem__name'>NAME</span>
            <hr />
            <span className='shopItem__previous'>Пред</span>
            <hr />
            <span className='shopItem__current'>Текущее</span>
          </div>
          <button className='shopItem__buttonAdd'>+</button>
        </div>
        <div className='shopItem'>
          <div className='shopItem__leftColoumn'>
            <span className='shopItem__name'>NAME</span>
            <hr />
            <span className='shopItem__previous'>Пред</span>
            <hr />
            <span className='shopItem__current'>Текущее</span>
          </div>
          <button className='shopItem__buttonAdd'>+</button>
        </div>
      </div>
    </div>
  );
};
export default Shop;
