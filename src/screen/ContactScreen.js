import React from "react";
import { Hero } from "../components";
import backImage from "../assets/images/Contact-hero.png";
import useTitle from "../useTitle";

const ContactScreen = () => {
  useTitle('Contact');
  return <>
    <Hero img={backImage} disableOverlay>
      <div className="contact-hero">
        <div className="contact-hero-text">
          <div className="contact-hero-title">
            <h2>
              Would you like to add a cocktail?
            </h2>
            <h4>
              Our team is always available to evaluate possible new recipes and add them to our database
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
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" className="input" placeholder="Daniele" />
              <hr/>
            </div>
            <div className="form-group">
              <label htmlFor="surname">Surname</label>
              <input type="text" id="surname" name="surname" className="input" placeholder="Tamarindo" />
              <hr />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" className="input" placeholder="danitama@gmail.com" />
              <hr />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input type="cel" id="phone" name="phone" className="input" placeholder="555 555 5555" />
              <hr />
            </div>
            <div className="form-group">
              <label htmlFor="recipe">Recipe</label>
              <input type="textarea" id="recipe" name="recipe" className="input textarea" placeholder="Write your recipe here..." />
            </div>
            <button className="btn btn-pink">Send recipe</button>
          </form>
        </div>
      </div>
    </Hero>
  </>;
};

export default ContactScreen;