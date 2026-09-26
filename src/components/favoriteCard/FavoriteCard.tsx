import './FavoriteCard.css';

import { FC } from 'react';
import { Link } from 'react-router';

import { Drink } from '../../types';
import { removeFavorite } from '../../utils/persistency';

interface FavoriteCardProps {
  drink: Drink;
  handleRemoveFavorite: (id: string) => void;
}

export const FavoriteCard: FC<FavoriteCardProps> = ({ drink, handleRemoveFavorite: onRemoveFavorite }) => {
  const handleClick = () => {
    removeFavorite(drink.idDrink);
    onRemoveFavorite(drink.idDrink);
  };
  return (
    <li key={drink.strDrink}>
      <img src={drink.strDrinkThumb} alt={drink.strDrink} />
      <div>
        <Link to={`/drink/${drink.idDrink}`}>
          <h3>{drink.strDrink}</h3>
        </Link>
        <p className='extra-info'>
          {drink.strCategory} - {drink.strGlass}
        </p>
      </div>
      <button onClick={handleClick} className='remove-favorite'>
        <span className='material-symbols-outlined'>heart_minus</span>
      </button>
    </li>
  );
};
