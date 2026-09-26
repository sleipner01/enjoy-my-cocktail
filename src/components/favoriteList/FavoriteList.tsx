import './FavoriteList.css';

import { useQueries } from '@tanstack/react-query';
import type { FC } from 'react';

import type { Drink } from '../../types';
import { fetchDrinkById } from '../../utils/queries';
import { FavoriteCard } from '../favoriteCard/FavoriteCard';
import { Spinner } from '../loading/Loading';

interface FavoriteListProps {
  favorites: string[];
  onRemoveFavorite: (id: string) => void;
}

export const FavoriteList: FC<FavoriteListProps> = ({ favorites, onRemoveFavorite }) => {
  const userQueries = useQueries({
    queries:
      favorites?.map((favorite) => {
        return {
          queryKey: ['drink', favorite],
          queryFn: () => fetchDrinkById(favorite).then((res) => res),
        };
      }) || [],
  });

  const data: Drink[] = userQueries.map((query) => query.data as Drink);

  const isPending: boolean = userQueries.some((query) => query.isPending);
  const isError: boolean = userQueries.some((query) => query.isError);
  const isSuccess: boolean = userQueries.some((query) => query.isSuccess);

  if (isPending) return <Spinner />;
  if (isError) return <div>Something went wrong...</div>;
  if (data.length == 0) return <div>No favorites found...</div>;

  return (
    <>
      <ul>
        {isSuccess &&
          favorites &&
          data.map((drink, index) => (
            <FavoriteCard drink={drink} handleRemoveFavorite={onRemoveFavorite} key={index} />
          ))}
      </ul>
    </>
  );
};
