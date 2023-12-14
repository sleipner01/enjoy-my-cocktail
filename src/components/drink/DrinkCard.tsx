import './DrinkCard.css';

import { useQuery } from '@tanstack/react-query';
import { FC } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { Drink } from '../../types';
import { fetchDrinkById } from '../../utils/queries';
import { FavoriteButton } from '../favoriteButton/FavoriteButton';
import { Spinner } from '../loading/Loading';

export const DrinkCard: FC = () => {
  const { id } = useParams();
  // useQuery hook

  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  const { data, isLoading, isSuccess } = useQuery<Drink | null>(['drink', id], () => fetchDrinkById(id));

  if (isLoading) return <Spinner />;

  if (!isSuccess) return <div className='drink-container'>Something went wrong</div>;

  if (!data) return <div className='drink-container'>No drink was found...</div>;

  return (
    <article itemScope itemType='https://schema.org/Recipe' className='drink-container'>
      <meta itemProp='name' content={data.strDrink} />
      <meta itemProp='image' content={data.strDrinkThumb} />
      <meta itemProp='thumbnailUrl' content={data.strDrinkThumb} />
      <meta itemProp='recipeCategory' content={data.strCategory} />
      <meta itemProp='recipeInstructions' content={data.strInstructions} />
      {data.ingredients.map((ingredient, index) => (
        <meta key={index} itemProp='recipeIngredient' content={ingredient.ingredient} />
      ))}

      <div className='drink-header'>
        <div className='return-button-container'>
          <button onClick={goBack} className='return-button'>
            &#60;-
          </button>
        </div>
        <h1>{data.strDrink}</h1>
        <div className='favorite-button-container'>
          <FavoriteButton id={id || ''} />
        </div>
      </div>
      <div className='image-container'>
        <img src={data.strDrinkThumb} alt={data.strDrink + 'image'} />
      </div>
      <div className='info'>
        <p id='drink-category'>{data.strCategory}</p>
        <p id='drink-glass'>{data.strGlass}</p>
        <p id='drink-alcoholic'>{data.strAlcoholic}</p>
      </div>
      <div className='ingredients'>
        <h3 className='section-header'>Ingredients</h3>
        <ul className='ingredients-list'>
          {data.ingredients.map((ingredient, index) => (
            <li key={index}>
              <div className='measure'>{ingredient.measure == null ? '' : ingredient.measure}</div>
              <div className='ingredient'>{ingredient.ingredient}</div>
            </li>
          ))}
        </ul>
      </div>
      <div className='instructions'>
        <h3 className='section-header'>Instructions</h3>
        <p>{data.strInstructions}</p>
      </div>
    </article>
  );
};
