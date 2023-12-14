import { CategoryType, DrinkOfTheDay } from '../types';

const addFavorite = (id: string) => {
  const favorites = getFavorites();
  favorites.push(id);
  localStorage.setItem('drinkFavorites', JSON.stringify(favorites));
};

export const getFavorites = () => {
  const favorites = localStorage.getItem('drinkFavorites');
  if (favorites) {
    return JSON.parse(favorites);
  }
  return [];
};

export const removeFavorite = (id: string) => {
  const favorites = getFavorites();
  const newFavorites = favorites.filter((favorite: string) => favorite !== id);
  localStorage.setItem('drinkFavorites', JSON.stringify(newFavorites));
};

export const toggleFavorite = (id: string) => {
  const favorites = getFavorites();
  if (favorites.includes(id)) {
    removeFavorite(id);
  } else {
    addFavorite(id);
  }
};

export const isFavorite = (id: string) => {
  const favorites = getFavorites();
  return favorites.includes(id);
};

export const getDrinkOfTheDay = (date: string) => {
  const drinkOfTheDay = localStorage.getItem('drinkOfTheDay');

  if (drinkOfTheDay) {
    const { drink, date: drinkDate } = JSON.parse(drinkOfTheDay);
    if (drinkDate === date) {
      return drink;
    }
  }
  return null;
};

export const setDrinkOfTheDay = (date: string, drink: DrinkOfTheDay) => {
  localStorage.setItem('drinkOfTheDay', JSON.stringify({ drink: drink, date: date }));
};

export const setSessionFilter = (filter: CategoryType) => {
  sessionStorage.setItem('filter', filter);
};

export const getSessionFilter = () => {
  return sessionStorage.getItem('filter') as CategoryType;
};

export const clearLocalStorage = () => {
  localStorage.clear();
};
