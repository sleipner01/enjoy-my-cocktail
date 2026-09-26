import type { Alcoholic, CategoryType, Drink, DrinkOfTheDay, Ingredient, SimpleDrinkType } from '../types';
import { fetchJson } from './fetchJson';
import { setDrinkOfTheDay } from './persistency';

const API_URL = 'https://www.thecocktaildb.com/api/json/v1/1';

// The API returns drinks as loosely typed records with numbered ingredient fields
type ApiDrink = Record<string, string> & { strAlcoholic: Alcoholic };
type ApiDrinksResponse = { drinks: ApiDrink[] };

export const fetchCategories = async () => {
  const { drinks } = await fetchJson<{ drinks: { strCategory: CategoryType }[] }>(`${API_URL}/list.php?c=list`);
  return drinks.map((drink) => drink.strCategory);
};

export const fetchDrinksByCategory = async (category: CategoryType | null) => {
  const { drinks } = await fetchJson<ApiDrinksResponse>(`${API_URL}/filter.php?c=${category || 'Beer'}`);
  return drinks.map((drink): SimpleDrinkType => ({
    strDrink: drink.strDrink,
    strDrinkThumb: drink.strDrinkThumb,
    idDrink: drink.idDrink,
  }));
};

export const fetchDrinkById = async (id?: string) => {
  if (!id) {
    return null;
  }
  const response = await fetchJson<ApiDrinksResponse>(`${API_URL}/lookup.php?i=${id}`)
    .then((response) => {
      // Extract drink data
      const drinkData = response.drinks[0];
      const ingredients: Array<Ingredient> = [];
      const drink: Drink = {
        idDrink: drinkData.idDrink,
        strDrink: drinkData.strDrink,
        strGlass: drinkData.strGlass,
        ingredients: [],
        strInstructions: drinkData.strInstructions,
        strDrinkThumb: drinkData.strDrinkThumb,
        strCategory: drinkData.strCategory,
        strAlcoholic: drinkData.strAlcoholic,
      };

      // Extract ingredients
      for (let i = 1; i <= 15; i++) {
        const ingredient: string = drinkData[`strIngredient${i}`];
        const measure: string = drinkData[`strMeasure${i}`];
        if (ingredient) {
          ingredients.push({ ingredient, measure });
        } else {
          break;
        }
      }

      drink.ingredients = ingredients;
      return drink;
    })
    .catch((error) => {
      if (error instanceof TypeError) {
        return null;
      } else {
        console.error('Error fetching drink:', error);
        return null;
      }
    });
  return response;
};

export const fetchDrinkOfTheDay = async (currentDate: string) => {
  return fetchJson<ApiDrinksResponse>(`${API_URL}/random.php`)
    .then((response) => {
      const randomDrink = response.drinks[0];

      const drink: DrinkOfTheDay = {
        drinkId: randomDrink.idDrink,
        strDrink: randomDrink.strDrink,
        strDrinkThumb: randomDrink.strDrinkThumb,
        strCategory: randomDrink.strCategory,
        strGlass: randomDrink.strGlass,
        strAlcoholic: randomDrink.strAlcoholic,
      };

      // Store the new random drink ID in local storage with the current date
      setDrinkOfTheDay(currentDate, drink);

      return drink;
    })
    .catch((error) => {
      console.error('Error fetching drink:', error);
      return null;
    });
};
