import { useQuery } from '@tanstack/react-query';
import { useState, type FC } from 'react';
import { useLocation } from 'react-router';

import { DrinkList } from '../components/drinkList/DrinkList';
import { Filter } from '../components/filter/Filter';
import { Spinner } from '../components/loading/Loading';
import type { CategoryType, SimpleDrinkType } from '../types';
import { getSessionFilter, setSessionFilter } from '../utils/persistency';
import { fetchDrinksByCategory } from '../utils/queries';

export const Search: FC = () => {
  const { state } = useLocation();
  const [searchCategory, setSearchCategory] = useState<CategoryType | null>(
    (state as CategoryType) || (getSessionFilter() as CategoryType) || null,
  );

  if (state) {
    setSessionFilter(state as CategoryType);
  }

  const { data, isPending } = useQuery<SimpleDrinkType[]>({
    queryKey: [searchCategory],
    queryFn: () => fetchDrinksByCategory(searchCategory),
  });

  return (
    <>
      <Filter searchCategory={searchCategory} setSearchCategory={setSearchCategory} />
      {isPending && <Spinner />}
      <DrinkList drinks={data} />
    </>
  );
};
