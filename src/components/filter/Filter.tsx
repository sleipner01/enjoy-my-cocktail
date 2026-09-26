import './Filter.css';

import { useQuery } from '@tanstack/react-query';
import { useState, type FC } from 'react';

import type { CategoryType } from '../../types';
import { setSessionFilter } from '../../utils/persistency';
import { fetchCategories } from '../../utils/queries';
import { Spinner } from '../loading/Loading';

interface FilterProps {
  searchCategory: string | null;
  setSearchCategory: (category: CategoryType | null) => void;
}

export const Filter: FC<FilterProps> = ({ searchCategory, setSearchCategory }) => {
  const [filter, setFilter] = useState(searchCategory || '');
  const { data, isPending, isSuccess } = useQuery<CategoryType[]>({
    queryKey: ['categories'],
    queryFn: fetchCategories,
  });

  if (isPending) return <Spinner />;

  if (!isSuccess) return <div>Something went wrong</div>;

  return (
    <div className='category-div'>
      {data && isSuccess && (
        <select
          className='search-category'
          aria-label='Filter by category'
          value={filter}
          onChange={(e) => {
            setSearchCategory(e.target.value as CategoryType);
            setFilter(e.target.value as CategoryType);
            setSessionFilter(e.target.value as CategoryType);
          }}
        >
          {data.sort().map((category: CategoryType) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      )}
    </div>
  );
};
