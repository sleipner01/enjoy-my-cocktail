import type { DrinkOfTheDay } from '../../types';
import { getDrinkOfTheDay, getFavorites, isFavorite, setDrinkOfTheDay, toggleFavorite } from '../persistency';

const testDrink: DrinkOfTheDay = {
  drinkId: '1',
  strDrink: 'Test drink',
  strDrinkThumb: 'http://www.test.com/test.jpg',
  strAlcoholic: 'Alcoholic',
  strCategory: 'Ordinary Drink',
  strGlass: 'Highball glass',
};

describe('Persistency', () => {
  afterEach(() => {
    localStorage.clear();
  });
  it('should return an empty array if there are no favorites', () => {
    const favorites = getFavorites();
    expect(favorites).toEqual([]);
  });

  it('should add a favorite', () => {
    toggleFavorite('1');
    const favorites = getFavorites();
    expect(favorites).toEqual(['1']);
  });

  it('should remove a favorite', () => {
    toggleFavorite('1');
    toggleFavorite('1');
    const favorites = getFavorites();
    expect(favorites).toEqual([]);
  });

  it('should return true if the drink is a favorite', () => {
    toggleFavorite('1');
    const favorite = isFavorite('1');
    expect(favorite).toEqual(true);
  });

  it('should return null if no drink of the day is set', () => {
    const drink = getDrinkOfTheDay(new Date().toISOString().split('T')[0]);
    expect(drink).toEqual(null);
  });

  it('should return the drink of the day', () => {
    const date = new Date().toISOString().split('T')[0];
    const drink: DrinkOfTheDay = testDrink;
    setDrinkOfTheDay(date, drink);
    expect(getDrinkOfTheDay(date)).toEqual(drink);
  });
});
