import { fireEvent, screen } from '@testing-library/react';

import type { SimpleDrinkType } from '../../../types';
import { renderWithRouterAndQueryClient } from '../../../utils/test-utils';
import { SimpleDrink } from '../SimpleDrink';

const drink: SimpleDrinkType = {
  strDrink: 'Margarita',
  strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg',
  idDrink: '11007',
};

describe('SimpleDrink', () => {
  it('Should match snapshot', () => {
    const { container } = renderWithRouterAndQueryClient(<SimpleDrink drink={drink} />);
    expect(container).toMatchSnapshot();
  });

  it('Should render correct heading element', () => {
    renderWithRouterAndQueryClient(<SimpleDrink drink={drink} />);
    expect(screen.getByText(drink.strDrink)).toBeDefined();
    expect(screen.getByRole('heading', { name: drink.strDrink })).toBeDefined();
  });

  it('Should render correct image for drink', () => {
    renderWithRouterAndQueryClient(<SimpleDrink drink={drink} />);
    expect(screen.getByRole('img', { name: 'Drink image' }));
  });

  it('Should navigate to correct drink on click', () => {
    renderWithRouterAndQueryClient(<SimpleDrink drink={drink} />);
    fireEvent.click(screen.getByRole('link'));
    expect(window.location.pathname).toBe('/drink/11007');
  });
});
