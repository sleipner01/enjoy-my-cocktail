import './DrinkList.css';

import type { FC } from 'react';

import type { SimpleDrinkType } from '../../types';
import { SimpleDrink } from '../simpleDrink/SimpleDrink';

interface DrinkListProps {
  drinks: SimpleDrinkType[] | undefined;
}

export const DrinkList: FC<DrinkListProps> = ({ drinks }) => {
  return (
    <>
      {drinks && (
        <div className='drink-div'>
          {drinks.map((drink: SimpleDrinkType) => (
            <SimpleDrink key={drink.idDrink} drink={drink} />
          ))}
        </div>
      )}
    </>
  );
};
