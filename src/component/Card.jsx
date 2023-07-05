import React from "react";
import "../style/Card.css";
import CardItem from "./CardItem";
import meImage from "../images/me.jpg";
import boxImage from "../images/InShot_20230702_1213134632.jpg";
import computeOs from "../images/computeOs.jpg";
import box2Image from "../images/special2.png";
import ModelImage from "../images/InShot_20230702_123050524.jpg";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out your boundries!</h1>
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
              src={box2Image}
              className="four"
              text="Nutritional support and eating habits"
              label="Toning & Nutrition"
              path="/products"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={ModelImage}
              className="five"
              text="Modeling & Collaboration"
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
