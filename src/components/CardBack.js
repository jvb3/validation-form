/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import cardBack from "../images/bg-card-back.png";

const CardBack = ({ formValues, formErrors, isSubmit }) => {
  return (
    <div className="card-back card__item-back">
      <img src={cardBack} className="card-back__image" />
      {Object.keys(formErrors).length === 0 && isSubmit ? (
        <p className="card-back__text">{formValues.cvc}</p>
      ) : (
        <p className="card-back__text">000</p>
      )}
    </div>
  );
};

export default CardBack;
