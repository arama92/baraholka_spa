import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <div className='header'>
      <Link to='/main' className='header__linkHeader'>
        todos
      </Link>
      <Link to='/shop' className='header__linkHeader'>
        shop
      </Link>
    </div>
  );
};
export default Header;
