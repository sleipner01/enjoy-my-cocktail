import { http, HttpResponse } from 'msw';

import { alternativeDrink, defaultDrinkResponse } from './mockObjects';

export const handlers = [
  http.get('https://www.thecocktaildb.com/api/json/v1/1/list.php', () =>
    HttpResponse.json({
      drinks: [
        {
          strCategory: 'Beer',
        },
        {
          strCategory: 'Cocoa',
        },
        {
          strCategory: 'Coffee / Tea',
        },
      ],
    }),
  ),

  http.get('https://www.thecocktaildb.com/api/json/v1/1/lookup.php', ({ request }) => {
    const id = new URL(request.url).searchParams.get('i');
    if (id === '0') {
      return HttpResponse.json({ drinks: [] });
    }
    if (id === '2') {
      return HttpResponse.json({ drinks: [alternativeDrink] });
    }
    return HttpResponse.json({ drinks: [defaultDrinkResponse] });
  }),

  http.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php', () =>
    HttpResponse.json({
      drinks: [
        {
          idDrink: '11118',
          strDrink: 'Super Drink',
          strDrinkThumb: 'https://localhost:3000/drink/11118.jpg',
        },
      ],
    }),
  ),

  http.get('https://www.thecocktaildb.com/api/json/v1/1/random.php', () =>
    HttpResponse.json({
      drinks: [
        {
          idDrink: '9118',
          strDrink: 'Random Drink',
          strDrinkThumb: 'https://localhost:3000/drink/11118.jpg',
          strCategory: 'Category',
          strGlass: 'Highball',
          strAlcoholic: 'Alcoholic',
        },
      ],
    }),
  ),
];
