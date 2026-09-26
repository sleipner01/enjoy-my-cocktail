import type { SimpleDrinkType } from '../../../types';
import { renderWithRouterAndQueryClient } from '../../../utils/test-utils';
import { DrinkList } from '../DrinkList';

const simpleDrinks: SimpleDrinkType[] = [
  {
    strDrink: 'Margarita',
    strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg',
    idDrink: '11007',
  },
  {
    strDrink: 'Blue Margarita',
    strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/bry4qh1582751040.jpg',
    idDrink: '178332',
  },
  {
    strDrink: "Tommy's Margarita",
    strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/loezxn1504373874.jpg',
    idDrink: '17216',
  },
];

describe('DrinkList', () => {
  it('Should match snapshot', () => {
    const { container } = renderWithRouterAndQueryClient(<DrinkList drinks={simpleDrinks} />);
    expect(container).toMatchSnapshot();
  });

  it('Should render correct number of drinks', () => {
    renderWithRouterAndQueryClient(<DrinkList drinks={simpleDrinks} />);
    expect(document.getElementsByClassName('drink-div')[0].childElementCount).toBe(3);
  });

  it('Should render correct drinks', () => {
    renderWithRouterAndQueryClient(<DrinkList drinks={simpleDrinks} />);
    expect(document.getElementsByClassName('drink-div')[0].children[0].textContent).toBe('Margarita');
    expect(document.getElementsByClassName('drink-div')[0].children[1].textContent).toBe('Blue Margarita');
    expect(document.getElementsByClassName('drink-div')[0].children[2].textContent).toBe("Tommy's Margarita");
  });
});
