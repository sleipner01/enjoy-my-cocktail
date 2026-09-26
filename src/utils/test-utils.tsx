import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { render } from '@testing-library/react';
import { ReactElement } from 'react';
import { BrowserRouter, MemoryRouter, Route, Routes } from 'react-router-dom';

import { DrinkCard } from '../components/drink/DrinkCard';

// Function to render a component wrapped inside a browserrouter for testing purposes
export const renderWithRouter = (component: ReactElement) => render(<BrowserRouter>{component}</BrowserRouter>);

const queryClient = new QueryClient();

export const renderWithRouterAndQueryClient = (component: ReactElement) =>
  render(
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>{component}</BrowserRouter>
    </QueryClientProvider>,
  );

export const renderWithRouterQueryClientAndDrinkId = (id: string) =>
  render(
    <QueryClientProvider client={new QueryClient()}>
      <MemoryRouter initialEntries={[`/drink/${id}`]}>
        <Routes>
          <Route path='/drink'>
            <Route path=':id' element={<DrinkCard />} />
          </Route>
        </Routes>
      </MemoryRouter>
    </QueryClientProvider>,
  );
