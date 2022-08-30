/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";

import CardFront from "./CardFront";
import CardBack from "./CardBack";
import InputBoxes from "./InputBoxes";
export const Cards = ({
  handleInput,
  formValues,
  handleSubmit,
  formErrors,
  isSubmit,
  reset,
}) => {
  return (
    <div className="card-container">
      <div className="card">
        <div className="bg-image"></div>
        <CardBack
          className="card__item card__item-back"
          formValues={formValues}
          formErrors={formErrors}
          isSubmit={isSubmit}
        />
        <CardFront
          className="card__item card__item-front"
          formValues={formValues}
          formErrors={formErrors}
          isSubmit={isSubmit}
        />
      </div>
      <InputBoxes
        handleInput={handleInput}
        formValues={formValues}
        handleSubmit={handleSubmit}
        formErrors={formErrors}
        isSubmit={isSubmit}
        reset={reset}
      />
    </div>
  );
};
