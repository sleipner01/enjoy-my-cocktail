import './FavoriteButton.css';

import { useState, type FC } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

import { isFavorite, toggleFavorite } from '../../utils/persistency';

interface FavoriteButtonProps {
  id: string;
}

export const FavoriteButton: FC<FavoriteButtonProps> = ({ id }) => {
  const [isFavoriteDrink, setIsFavoriteDrink] = useState(isFavorite(id));

  const updateFavoriteDrink = () => {
    setIsFavoriteDrink(id ? isFavorite(id) : false);
  };

  const toggleFavoriteDrink = () => {
    if (id) {
      toggleFavorite(id);
      updateFavoriteDrink();
    }
  };

  const heart = isFavoriteDrink ? <FaHeart /> : <FaRegHeart />;

  return (
    <div
      className={`favorite-toggle${isFavoriteDrink ? ' favorite' : ''}`}
      onClick={toggleFavoriteDrink}
      data-testid='favorite'
    >
      {heart}
    </div>
  );
};
