import './Navbar.css';

import { FaCocktail } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';

import GithubIcon from '../../assets/github.svg';

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
        <NavLink to={'/'} className='link'>
          Home
        </NavLink>
        <NavLink to={'/drinks/'} className='link'>
          Drinks
        </NavLink>
        <NavLink to={'/favorites/'} className='link'>
          Favorites
        </NavLink>
        <a className='link' target='_blank' href='https://github.com/sleipner01/enjoy-my-cocktail' rel='noreferrer'>
          <img src={GithubIcon} alt='github' className='githubIcon' width={22} />
        </a>
      </div>
    </nav>
  );
};
