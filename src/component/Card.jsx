import React from "react";
import "../style/Card.css";
import CardItem from "./CardItem";
import meImage from "../images/me.jpg";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these EPIC Destinations!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items one">
            <CardItem
              src={meImage}
              style={{
                width: "535px",
                height: "358px",
                objectFit: "contain",
                objectPosition: "center",
              }}
              text="About Me"
              label="Adventure"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="../images/osbox.jpg"
              className="two"
              text="Travel through the Islands of Bali in a Private Cruise"
              label="Luxury"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              // src="../images/osnat_box.jpg"
              className="three"
              text="Set Sail in the Atlantic Ocean visiting Uncharted Waters"
              label="Mystery"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              // src="../images/special2.png"
              className="four"
              text="Experience Football on Top of the Himilayan Mountains"
              label="Adventure"
              path="/products"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              // src="../images/me.jpg"
              className="five"
              text="Ride through the Sahara Desert on a guided camel tour"
              label="Adrenaline"
              path="/sign-up"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
