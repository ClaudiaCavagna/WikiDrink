import React from "react";
import styled from 'styled-components';
import Lottie from "react-lottie";
import animationData from "../assets/animation/error.json";
import { Link } from "react-router-dom";
import useTitle from "../useTitle";

const ErrorScreen = () => {
  useTitle('Page not Found');
  return <Wrapper>
    <Lottie options={
      {
        loop: true,
        autoplay: true,
        reverse: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      }
    }
    width={500}
    height={500} />
    <h5>page not found</h5>
    <Link to='/' className='btn px-4 py-2'>Back to home</Link>
  </Wrapper>;
};

const Wrapper = styled.section`
  min-height: 86.2vh;
  display: grid;
  place-items: center;
  margin-top: 5px;
  margin-bottom: 5px;
  h5 {
    text-transform: uppercase;
    font-weight: bold;
  }
  .btn {
    border-radius: 10px;
    background-color: black;
    text-transform: uppercase;
    font-size: 0.8rem;
    font-weight: bold;
    color: white;
  }
  .btn:hover {
    transform: scale(103%);
    background-color: black;
    color: white;
  }
  @media screen and (min-width: 992px) {
    min-height: 84.5vh;
  }
`

export default ErrorScreen;