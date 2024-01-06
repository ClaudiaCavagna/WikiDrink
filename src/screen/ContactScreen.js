import React from "react";
import { Hero } from "../components";
import backImage from "../assets/images/Contact-hero.png";
const ContactScreen = () => {
  return <>
    <Hero img={backImage} disableOverlay>
      <div className="contact-hero">
        <div className="contact-hero-text">
          <div className="contact-hero-title">
            <h2>
              Vorresti aggiungere un cocktail?
            </h2>
            <h4>
              Il nostro team è sempre disponibile per valutare possibili nuove ricette ed ad aggiungerle alla nostro database
            </h4>
          </div>
        </div>
        <div className="contact-form-container">
          <form 
            action="https://formspree.io/f/mkndnyqb"
            method="POST"
            className="contact-form"
          >
            <div className="form-group">
              <label htmlFor="name">Nome</label>
              <input type="text" id="name" name="name" className="input" placeholder="Daniele" />
              <hr/>
            </div>
            <div className="form-group">
              <label htmlFor="surname">Cognome</label>
              <input type="text" id="surname" name="surname" className="input" placeholder="Tamarindo" />
              <hr />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" className="input" placeholder="danitama@gmail.com" />
              <hr />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Telefono</label>
              <input type="cel" id="phone" name="phone" className="input" placeholder="555 555 5555" />
              <hr />
            </div>
            <div className="form-group">
              <label htmlFor="recipe">Ricetta</label>
              <input type="textarea" id="recipe" name="recipe" className="input textarea" placeholder="Scrivi la tua ricetta qui..." />
            </div>
            <button className="btn btn-pink">Invia ricetta</button>
          </form>
        </div>
      </div>
    </Hero>
  </>;
};

export default ContactScreen;