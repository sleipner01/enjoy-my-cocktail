import './Categories.css';

import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import type { FC } from 'react';

import type { CategoryType } from '../../types';
import { Category } from '../category/Category';
import { Spinner } from '../loading/Loading';

export const Categories: FC = () => {
  const { data, isPending, isSuccess } = useQuery<CategoryType[]>({
    queryKey: ['categories'],
    queryFn: () =>
      axios
        .get('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list')
        .then((res) => res.data.drinks.map((drink: { strCategory: string }) => drink.strCategory)),
  });

  if (isPending) return <Spinner />;

  return (
    <>
      <h2>Categories:</h2>
      {data && isSuccess && (
        <div className='categories'>
          {data.sort().map((category: CategoryType) => (
            <Category key={category} category={category} />
          ))}
        </div>
      )}
    </>
  );
};
