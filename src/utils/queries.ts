import axios, { isCancel } from 'axios';

import type { Drink, DrinkOfTheDay, Ingredient } from '../types';
import { setDrinkOfTheDay } from './persistency';

export const fetchDrinkById = async (id?: string) => {
  if (!id) {
    return null;
  }
  const response = await axios
    .get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
    .then((response) => {
      // Extract drink data
      const drinkData = response.data.drinks[0];
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
      if (isCancel(error)) {
        console.log('Request cancelled', error.message);
        return null;
      }
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
  return axios
    .get('https://www.thecocktaildb.com/api/json/v1/1/random.php')
    .then((response) => {
      const randomDrink = response.data.drinks[0];

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
