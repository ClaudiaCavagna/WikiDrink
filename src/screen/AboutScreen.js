import React from "react";
import { Hero, Card } from "../components";
import { valueCards, teamCards } from "../utils/info";
import image from "../assets/images/about-hero.jpg";
import teamImg from "../assets/images/team-img.jpg";

const AboutScreen = () => {
  return (
    <>
      <Hero img={image}>
        <section className='about-hero'>
          <div className='about-text'>
            <div className='topline'></div>
            <h3>
              <q>Grande è la fortuna di colui che possiede una buona bottiglia, un buon libro, un buon amico</q>
            </h3>
            <div className='underline'></div>
          </div>
        </section>
      </Hero>
      <section className='about-value'>
        <div className=' about-value-content'>
          <h3 className='about-title'>IL NOSTRO PROGETTO</h3>
          <div className='card-section'>
            {
              valueCards.map(card => {
                return <Card key={card.title} {...card} className={'value-card'} />
              })
            }
          </div>
        </div>
      </section>
    </>
  )
};

export default AboutScreen;