import { act, screen } from '@testing-library/react';

import type { CategoryType } from '../../../types';
import { renderWithRouterAndQueryClient } from '../../../utils/test-utils';
import { Category } from '../Category';

const categories: CategoryType[] = [
  'Ordinary Drink',
  'Cocktail',
  'Shake',
  'Other / Unknown',
  'Cocoa',
  'Shot',
  'Coffee / Tea',
  'Homemade Liqueur',
  'Punch / Party Drink',
  'Beer',
  'Soft Drink',
];

describe('Category', () => {
  it('Should match snapshot', () => {
    const { container } = renderWithRouterAndQueryClient(<Category category={'Ordinary Drink'} />);
    expect(container).toMatchSnapshot();
  });

  it('Should show category when it is passed as prop', () => {
    renderWithRouterAndQueryClient(<Category category={'Ordinary Drink'} />);
    expect(screen.getByText('Ordinary Drink')).toBeDefined();
  });

  it.each(categories)('Should navigate correct when "%s" is clicked', async (category) => {
    renderWithRouterAndQueryClient(<Category category={category} />);
    act(() => {
      screen.getByText(category).click();
    });
    expect(window.location.pathname).toBe('/drinks');
    expect(window.history.state.usr).toEqual(category);
  });

  it.each(categories)('Should use "%s" as state in navigation when clicked', async (category) => {
    renderWithRouterAndQueryClient(<Category category={category} />);
    act(() => {
      screen.getByText(category).click();
    });
    expect(window.history.state.usr).toEqual(category);
  });
});
