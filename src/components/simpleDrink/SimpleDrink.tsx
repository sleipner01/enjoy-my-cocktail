import './SimpleDrink.css';

import { FC } from 'react';
import { Link } from 'react-router';

import { SimpleDrinkType } from '../../types';

interface SimpleDrinkProps {
  drink: SimpleDrinkType;
}

export const SimpleDrink: FC<SimpleDrinkProps> = ({ drink }) => {
  return (
    <Link to={`/drink/${drink.idDrink}`} state={drink.idDrink} className='simple-drink'>
      <h3>{drink.strDrink}</h3>
      <img src={drink.strDrinkThumb} alt='Drink image' className='drink-image' />
    </Link>
  );
};
