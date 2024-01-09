import React from "react";
import { Loading, ErrorMessage } from "../components";
import { useParams, Link } from "react-router-dom";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import styled from "styled-components";
import useFetch from "../useFetch";
import useTitle from "../useTitle";

const SingleCocktailScreen = () => {
  const {id} = useParams();
  const {isLoading, isError, data} = useFetch(`i=${id}`, true);
  useTitle(data && data.drinks ? data.drinks[0].strDrink : 'Not Found');

  if(isLoading){
    return (
      <Wrapper>
        <Loading />
      </Wrapper>
    );
  }
  if(isError) {
    return (
      <Wrapper>
        <div className='back-section-err'>
          <header>
            <Link to='/'>
              <IoArrowBackCircleSharp className='back-icon-err' />
            </Link>
          </header>
          <ErrorMessage>
            Cocktail non disponibile
          </ErrorMessage>
        </div>
      </Wrapper>
    );
  }

  const {
    strDrink: name, 
    strCategory: category,
    strAlcoholic: type,
    strGlass,
    strDrinkThumb: image,
    strIngredient1,
    strIngredient2,
    strIngredient3,
    strIngredient4,
    strIngredient5,
    strMeasure1,
    strMeasure2,
    strMeasure3,
    strMeasure4,
    strMeasure5,
    strInstructions
  } = data.drinks[0]

  const instructionList = [
    {
      instructions: strIngredient1, 
      qty: strMeasure1
    },
    {
      instructions: strIngredient2, 
      qty: strMeasure2
    },
    {
      instructions: strIngredient3, 
      qty: strMeasure3
    },
    {
      instructions: strIngredient4, 
      qty: strMeasure4
    },{
      instructions: strIngredient5, 
      qty: strMeasure5
    }
  ];

  return <Wrapper>
    <div className='back-section'>
      <header>
        <Link to='/'>
          <IoArrowBackCircleSharp className='back-icon' />
        </Link>
        <h4 className='back-text'>Back to home</h4>
      </header>
      <div className='cocktail-container'>
        <img src={image} alt={name} className='cocktail-img' />
        <div className='cocktail-details'>
          <div>
            <h2>{name}</h2>
          </div>
          <div className='cocktail-type'>
            <p className='label'>{type}</p>
            <p className='label'>{category}</p>
            <p className='label'>{strGlass}</p>
          </div>
        <hr/>
          <h4>Ingredients</h4>
          <ul className='instruction-list'>
            {
              instructionList.map((el, index) => {
                if(el.instructions) {
                  return (
                    <li key={index}>
                      <p className='cocktail-info'>{el.qty} {el.instructions}</p>
                    </li>
                  )
                }
              })
            }
          </ul>
        <hr/>
          <h4>Recipe</h4>
          <p className='cocktail-info'>
            {strInstructions}
          </p>
        </div>
      </div>
    </div>
  </Wrapper>
};

const Wrapper = styled.section`
  min-height: 96vh;
  padding-bottom: 4rem;
  hr {
    width: 100%;
    place-self: center;
    border-bottom: 1px solid var(--divider-color);
  }
  h2 {
    text-transform: uppercase;
    font-weight: 700;
  }
  h4 {
    text-transform: uppercase;
    font-size: 1.2rem;
    font-weight: 700;
    color: var(--dark-gray);
  }
  .cocktail-container p {
    font-size: 0.8rem;
    color: var(--dark-gray)
  }
  .back-section-err {
    text-align: center;
    margin-top: 3rem;
  }
  .back-section {
    text-align: center;
    margin-top: 1.5rem;
  }
  .back-section header {
    display: flex;
    justify-content: center;
    gap: 1rem;
  }
  .back-text {
    font-size: 0.8rem;
    text-transform: uppercase;
    color: var(--soft-dark-gray);
    margin-top: 0.4rem;
  }
  .back-icon-err {
    font-size: 3rem;
    color: var(--flickr-pink);
  }
  .back-icon:hover, .back-icon-err:hover {
    transform: scale(1.03);
    color: var(--byzantine);
  }
  .back-icon {
    font-size: 1.5rem;
    color: var(--flickr-pink);
  }
  .cocktail-container {
    display: grid;
    margin: 2rem;
    margin-top: 1rem;
  }
  .cocktail-img {
    width: 100%;
    border-radius: 8px;
    border: 1px solid white;
  }
  .cocktail-details {
    margin-top: 2rem;
  }
  .cocktail-type {
    display: flex;
    justify-content: space-between;
    margin-inline: 1rem;
  }
  .cocktail-type .label {
    background-color: var(--soft-light-gray);
    padding: 0.3rem;
    font-size: 0.6rem;
    text-transform: uppercase;
    border: 1px solid var(--light-gray);
    border-radius: 4px;
    color: var(--soft-dark-gray);
  }
  .instruction-list {
    text-align: start;
  }
  @media screen and (min-width: 992px) {
  
    .cocktail-container {
      display: flex;
      margin-top: 3rem;
      justify-content: center;
      margin-inline: 15rem;
    }
    .cocktail-img {
      width: 400px;
      height: 400px;
    }
    .cocktail-details {
      text-align: start;
      margin-top: 0;
      margin-left: 7rem;
    }
    .cocktail-type {
      margin-left: 0;
      gap: 2rem;
    }
    .instruction-list {
      padding-left: 0;
    }
  }
`

export default SingleCocktailScreen;