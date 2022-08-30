/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import successLogo from "../images/icon-complete.svg";

export const FormSuccess = ({ formValues, isSubmit, reset }) => {
  return (
    <div className="form-success">
      <img className="form-success__logo" src={successLogo} />
      <p className="form-success__text form-success__text-thanks">THANK YOU!</p>

      <p className="form-success__text form-success__text-confirmation">
        We've added your card details
      </p>
      <button onClick={reset} className="form__button" type="submit">
        Continue
      </button>
    </div>
  );
};
