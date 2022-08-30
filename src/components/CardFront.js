/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import cardFront from "../images/bg-card-front.png";
import cardLogo from "../images/card-logo.svg";

const CardFront = ({ formValues, formErrors, isSubmit }) => {
  return (
    <div className="card-front card__item-front">
      <img className="card-front__image" src={cardFront} />
      <img className="card-front__logo" src={cardLogo} />
      {Object.keys(formErrors).length === 0 && isSubmit ? (
        <p className="card-front__text card-front__number">
          {formValues.number}
        </p>
      ) : (
        <p className="card-front__text card-front__number">
          0000 0000 0000 0000
        </p>
      )}
      {Object.keys(formErrors).length === 0 && isSubmit ? (
        <p className="card-front__text card-front__name">{formValues.name}</p>
      ) : (
        <p className="card-front__text card-front__name">JANE APPLESEED</p>
      )}
      {Object.keys(formErrors).length === 0 && isSubmit ? (
        <p className="card-front__text card-front__expiry">
          {formValues.expMonth}/{formValues.expYear}
        </p>
      ) : (
        <p className="card-front__text card-front__expiry">00/00</p>
      )}
    </div>
  );
};

export default CardFront;
