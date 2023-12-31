export type CategoryType =
  | 'Ordinary Drink'
  | 'Cocktail'
  | 'Shake'
  | 'Other / Unknown'
  | 'Cocoa'
  | 'Shot'
  | 'Coffee / Tea'
  | 'Homemade Liqueur'
  | 'Punch / Party Drink'
  | 'Beer'
  | 'Soft Drink';

export type Alcoholic = 'Alcoholic' | 'Non alcoholic' | 'Optional alcohol';

export interface Ingredient {
  ingredient: string;
  measure: string;
}

export interface Drink {
  idDrink: string;
  strDrink: string;
  ingredients: Array<Ingredient>;
  strGlass: string;
  strInstructions: string;
  strDrinkThumb: string;
  strCategory: string;
  strAlcoholic: Alcoholic;
}

export type SimpleDrinkType = {
  strDrink: string;
  strDrinkThumb: string;
  idDrink: string;
};

export interface DrinkOfTheDay {
  drinkId: string;
  strDrink: string;
  strDrinkThumb: string;
  strCategory: string;
  strGlass: string;
  strAlcoholic: Alcoholic;
}
