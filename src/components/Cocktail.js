import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { HiClipboardList } from "react-icons/hi";
import { useGlobalContext } from "../context";

const Cocktail = ({ strDrinkThumb: img, idDrink: _id, strDrink: name }) => {
  const { getScrollPosition } = useGlobalContext();
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const showInfo = () => {
    setShow(true);
  };

  const hideInfo = () => {
    setShow(false);
  };

  const goToCocktail = (_id) => {
    getScrollPosition(window.scrollY);
    navigate(`/cocktail/${_id}`);
  };

  return (
    <Wrapper onMouseEnter={showInfo} onMouseLeave={hideInfo}>
      <div
        className='img'
        style={{
          backgroundImage: `url(${img})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      />
      <div className={ show ? `card-text show-info` : "card-text" } >
        <h5>{name}</h5>
        <div className='see-more-btn' onClick={() => goToCocktail(_id)} >
          <h5>Recipe</h5>
          <HiClipboardList className='icon ' />
        </div>
      </div>
      <div className='card-text-sm container'>
        <h5>{name}</h5>
        <div className='see-more-btn' onClick={() => goToCocktail(_id)} >
          <h5>Recipe</h5>
          <HiClipboardList className='icon ' />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  cursor: pointer;
  position: relative;
  width: 70%;
  margin: auto;
  border-radius: var(--img-radius);
  display: grid;
  box-shadow: var(--light-shadow);

  .img {
    width: 100%;
    height: 300px;
    border-radius: var(--img-radius);
  }

  .card-text-sm {
    display: flex;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
  }

  .card-text,
  .card-text-sm {
    justify-content: space-between;
    align-items: center;
  }

  .card-text-sm h5 {
    font-size: 0.9rem;
    margin-top: 0.6rem;
    font-weight: 700;
  }

  .icon {
    font-size: 1.2rem;
  }

  .card-text {
    display: none;
  }

  .see-more-btn {
    display: flex;
    align-items: center;
    gap: 0.2rem;
    transition: var(--transition);
    color: var(--flickr-pink);
  }

  .see-more-btn:hover svg,
  .see-more-btn:hover h5 {
    color: var(--byzantine);
  }

  @media screen and (min-width: 992px) {
    width: 100%;
    margin: unset;

    .card-text {
      position: absolute;
      bottom: 0;
      overflow: hidden;
      height: 0;
      opacity: 0;
      width: 100%;
      background-color: transparent;
      color: var(--text-color);
      transition: var(--transition);
      display: flex !important;
      padding-inline: 1rem;
    }

    .card-text h5 {
      font-size: 1rem;
      font-weight: 700;
      margin-top: 0.6rem;
    }

    .icon {
      font-size: 1.3rem;
    }

    .show-info {
      background-color: transparent;
      background-color: rgba(0, 0, 0, 0.8);
      opacity: 1;
      height: 20%;
    }
    .card-text-sm {
      display: none;
    }
  }
`;

export default Cocktail;