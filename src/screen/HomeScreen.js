import React, { useEffect, useState } from "react";
import { Hero, Cocktails, Loading, ErrorMessage } from "../components";
import { FaSearch } from "react-icons/fa";
import Lottie from "react-lottie";
import animationData from "../assets/animation/drink-animation.json";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";
const HomeScreen = () => {
  const {query, isLoading, data, isError, count, searchCocktail, deleteScrollPosition, scrollPosition} = useGlobalContext();
  const [input, setInput] = useState(query);

  const handleSubmit = (e) => {
    e.preventDefault();
    searchCocktail(input);
  }

  useEffect(()=>{
    if(scrollPosition) {
      window.scrollTo(0, scrollPosition)
      deleteScrollPosition();
    }
  }, [])

  return <>
  <Hero >
    <div className="home-hero">
      <div className="home-hero-text">
        <div className="home-hero-title">
          <h2>WIKI DRINK</h2>
          <h4>Tutti i cocktail del mondo a portata di click</h4>
          <p>Wiki Drink è un database internazionale che mette a tua disposizione, in maniera <span>Gratuita</span>, le ricette dei più importanti e diffusi cocktail al mondo.</p>
          <Link to='/about' className='btn btn-pink'>
            Scopri di più
          </Link>
        </div>
      </div>
      <div className="home-hero-img">
        <Lottie 
          options={{
            loop: true,
            autoplay: true,
            reverse: true,
            animationData,
            rendererSettings: {
              preserveAspectRatio: 'xMidYMid slice',
            }
          }}
          height={350}
        />
      </div>
    </div>
  </Hero>
  <section className="home-screen">
    <div className="search-container">
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <label htmlFor="drink">
            <h4>Cerca il tuo drink</h4>
          </label>
          <div className="search-bar">
            <input id="drink" className="input"
            placeholder={query} 
            value={input}
            onChange={(e)=>setInput(e.target.value)}
            />
            <button className="btn">
              <FaSearch className="icon" />
            </button>
          </div>
        </form>
      </div>
      <p className="result">{count} risultati</p>
    </div>
    {
      !isLoading && isError ? (
      <ErrorMessage>Nessun cocktail trovato</ErrorMessage>
      ) : !isLoading && !isError ? (
      <Cocktails data={data.drinks} className="center-cocktail" />
      ) : (
      <Loading />
      )
    }
  </section>
  </>;
};

export default HomeScreen;