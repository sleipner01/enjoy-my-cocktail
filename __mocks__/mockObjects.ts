import type { Drink } from '../src/types';

export const defaultDrinkResponse = {
  idDrink: '11118',
  strDrink: 'Super Drink',
  ingredients: [],
  strGlass: 'Highball',
  strInstructions: 'Instructions for drink',
  strDrinkThumb: 'https://localhost:3000/drink/11118.jpg',
  strCategory: 'Category',
  strAlcoholic: 'Alcoholic',
  strIngredient1: 'Ingredient 1',
  strMeasure1: 'Measure 1',
  strIngredient2: 'Ingredient 2',
  strMeasure2: 'Measure 2',
};

export const mockDrink: Drink = {
  idDrink: '11118',
  strDrink: 'Super Drink',
  ingredients: [
    { ingredient: 'Ingredient 1', measure: 'Measure 1' },
    { ingredient: 'Ingredient 2', measure: 'Measure 2' },
  ],
  strGlass: 'Highball',
  strInstructions: 'Instructions for drink',
  strDrinkThumb: 'https://localhost:3000/drink/11118.jpg',
  strCategory: 'Category',
  strAlcoholic: 'Alcoholic',
};

export const alternativeDrink: Drink = {
  idDrink: '22222',
  strDrink: 'Foo bar',
  ingredients: [],
  strGlass: 'Foo',
  strInstructions: 'Instructions for foo drink',
  strDrinkThumb: 'https://localhost:3000/drink/2.jpg',
  strCategory: 'Category',
  strAlcoholic: 'Alcoholic',
};

export const randomDrink = {
  idDrink: '9118',
  strDrink: 'Random Drink',
  strDrinkThumb: 'https://localhost:3000/drink/11118.jpg',
  strCategory: 'Category',
  strGlass: 'Highball',
  strAlcoholic: 'Alcoholic',
};
