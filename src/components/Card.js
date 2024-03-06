import React from 'react';
import styled from 'styled-components';

const Card = ({title, icon, text, img, subtitle, className}) => {
  return (
    <Wrapper className={className ? `${className}` : ''}>
      <div className='card-container'>
        <div className='card-title'>
          <h5>{title}</h5>
        </div>
        {subtitle ? (
          <div className='card-subtitle'>
            <h6>{subtitle}</h6>
          </div>
        ) : (
          <div className='card-icon'>
            {icon}
          </div>
        )}
        {text ? (
          <div className='card-text'>
            <p>{text}</p>
          </div>
        ) : (
          <img src={img} alt={title} className='card-img' />
        )}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.article`
  padding-top: 2rem;
  padding-bottom: 2rem;
  padding-inline: 0.8rem;
  border-radius: 6px;
  background-color: white;
  transition: var(--transition);
  
  .card-container {
    display: grid;
    place-items: center;
    text-align: center;
 
    .card-subtitle h6{
      font-size: 0.8rem !important;
      color: var(--dark-grey);
    }
    .card-icon {
      color: var(--flickr-pink);
      font-size: 2.2rem !important;
      padding: 0;
    }
    .card-img {
      width: 200px;
      height: 200px;
      border-radius: 50%;
      filter: brightness(80%);
    }
    .card-text {
      margin-top: 0.3rem;
      max-width: 35ch;
      color: var(--soft-dark-gray);
    }
    .card-title h5{
      font-weight: 700;
      font-size: 1.2rem;
      color: var(--dark-grey);
    }
  }
`
export default Card
