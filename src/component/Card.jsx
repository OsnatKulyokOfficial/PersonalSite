import React from "react";
import "../style/Card.css";
import CardItem from "./CardItem";
import meImage from "../images/me.jpg";
import boxImage from "../images/osbox.jpg";
import computeOs from "../images/computeOs.jpg";
import box2Image from "../images/special2.png";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these EPIC Destinations!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items one">
            <CardItem
              src={meImage}
              text="About Me"
              label="Adventure"
              path="/services"
            />
          </ul>
          <ul className="cards__items ">
            <CardItem
              src={computeOs}
              text="School & Proffesional Projects"
              label="My Geek Side"
              path="/services"
            />
          </ul>
          <ul className="cards__items ">
            <CardItem
              src={boxImage}
              text="Fighting & Competetiton"
              label="Fights"
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
