import { http, HttpResponse } from 'msw';

import { server } from '../../../__mocks__/server';
import { fetchCategories, fetchDrinkById, fetchDrinksByCategory } from '../queries';

const expectedDrink = {
  idDrink: '11118',
  strDrink: 'Super Drink',
  strGlass: 'Highball',
  strInstructions: 'Instructions for drink',
  strDrinkThumb: 'https://localhost:3000/drink/11118.jpg',
  strCategory: 'Category',
  strAlcoholic: 'Alcoholic',
  ingredients: [
    { ingredient: 'Ingredient 1', measure: 'Measure 1' },
    { ingredient: 'Ingredient 2', measure: 'Measure 2' },
  ],
};

describe('queries - fetchDrinkById', () => {
  it('it should return correct object', async () => {
    expect(await fetchDrinkById('1')).toEqual(expectedDrink);
  });

  it('it should return null when id is invalid', async () => {
    expect(await fetchDrinkById('0')).toEqual(null);
  });

  it('it should return null when id is not provided', async () => {
    expect(await fetchDrinkById()).toEqual(null);
  });

  it('it should return null when the request fails', async () => {
    vi.spyOn(console, 'error').mockImplementation(() => {});
    server.use(
      http.get('https://www.thecocktaildb.com/api/json/v1/1/lookup.php', () => new HttpResponse(null, { status: 500 })),
    );
    expect(await fetchDrinkById('1')).toEqual(null);
  });
});

describe('queries - fetchCategories', () => {
  it('should return the category names', async () => {
    expect(await fetchCategories()).toEqual(['Beer', 'Cocoa', 'Coffee / Tea']);
  });
});

describe('queries - fetchDrinksByCategory', () => {
  it('should return simplified drinks', async () => {
    expect(await fetchDrinksByCategory('Beer')).toEqual([
      { idDrink: '11118', strDrink: 'Super Drink', strDrinkThumb: 'https://localhost:3000/drink/11118.jpg' },
    ]);
  });
});
