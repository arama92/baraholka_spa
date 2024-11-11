import axios from 'axios';
import React from 'react';
import Currency from '../components/Currency';

const Shop = () => {
  const [valuteItem, setValuteItem] = React.useState([]);

  React.useEffect(() => {
    axios
      .get('https://www.cbr-xml-daily.ru/daily_json.js')
      .then((res) => {
        setValuteItem(res.data.Valute);
        // console.log(Object.keys(res.data.Valute));
        // console.log(Object.values(res.data.Valute));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const Currencys = Object.values(valuteItem).map((item) => (
    <Currency key={item.ID} name={item.Name} previous={item.Previous} current={item.Value} />
  ));

  return (
    <div className='shop'>
      <div className='shopHeader'>
        {/* <input type='text' placeholder='Поиск' className='shopHeader__shopFind' /> */}
        <button className='shopHeader__shopCurrency'>
          Отслеживаемые <span>0</span>
        </button>
      </div>
      <div className='shopList'>{Currencys}</div>
    </div>
  );
};
export default Shop;
