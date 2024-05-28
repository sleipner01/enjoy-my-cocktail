import './Category.css';

import { FC } from 'react';
import { Link } from 'react-router-dom';

import { CategoryType } from '../../types';

interface CategoryProps {
  category: CategoryType;
}

export const Category: FC<CategoryProps> = ({ category }) => (
  <Link to={`/drinks/`} state={category} className='category'>
    <h3>{category}</h3>
  </Link>
);
