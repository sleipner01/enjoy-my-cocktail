import './Navbar.css';

import { FaCocktail } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className='navbar'>
      <Link to={'/'} className={'logo'}>
        Enjoy my cocktail <FaCocktail />
      </Link>
      <Link to={'/'} className={'logoIcon'}>
        <FaCocktail />
      </Link>
      <div className='links'>
        <Link to={'/'} className='link'>
          Home
        </Link>
        <Link to={'/drinks/'} className='link'>
          Drinks
        </Link>
        <Link to={'/favorites/'} className='link'>
          Favorites
        </Link>
      </div>
    </nav>
  );
};
