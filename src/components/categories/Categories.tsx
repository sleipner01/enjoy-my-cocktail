import './Categories.css';

import { useQuery } from '@tanstack/react-query';
import type { FC } from 'react';

import type { CategoryType } from '../../types';
import { fetchCategories } from '../../utils/queries';
import { Category } from '../category/Category';
import { Spinner } from '../loading/Loading';

export const Categories: FC = () => {
  const { data, isPending, isSuccess } = useQuery<CategoryType[]>({
    queryKey: ['categories'],
    queryFn: fetchCategories,
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
