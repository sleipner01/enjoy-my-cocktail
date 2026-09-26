import './Category.css';

import type { FC } from 'react';
import { Link } from 'react-router';

import type { CategoryType } from '../../types';

interface CategoryProps {
  category: CategoryType;
}

export const Category: FC<CategoryProps> = ({ category }) => (
  <Link to='/drinks' state={category} className='category'>
    <h3>{category}</h3>
  </Link>
);
