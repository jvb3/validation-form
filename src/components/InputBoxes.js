import React from "react";
import { FormSuccess } from "./FormSuccess";

const InputBoxes = ({
  handleInput,
  formValues,
  handleSubmit,
  formErrors,
  isSubmit,
  reset,
}) => {
  return (
    <div className="form-container">
      {Object.keys(formErrors).length === 0 && isSubmit ? (
        <FormSuccess
          formValues={formValues}
          isSubmit={isSubmit}
          reset={reset}
        />
      ) : (
        <form className="form" onSubmit={handleSubmit}>
          <div className="form__content">
            <label className="form__label" for="name">
              CARDHOLDER NAME
            </label>
            <input
              onChange={handleInput}
              value={formValues.name}
              className="form__input"
              name="name"
              placeholder="e.g. Jane Appleseed"
              type="text"
            />
            <p className="form__text">{formErrors.name}</p>
          </div>

          <div className="form__content flex-basis">
            <label className="form__label" for="card-number">
              CARD NUMBER
            </label>
            <input
              onChange={handleInput}
              value={formValues.number}
              className="form__input"
              name="number"
              placeholder="e.g. 1234 5678 9123 0000"
              type="text"
            />
            <p className="form__text">{formErrors.number}</p>
          </div>

          <div className="form__inner-container-row">
            <div className="form__content  flex-basis-exp">
              <label className="form__label " for="expiration">
                EXP. DATE(MM/YY)
              </label>
              <div className="form__inner-container-column">
                <div>
                  <input
                    onChange={handleInput}
                    value={formValues.expMonth}
                    className="form__input"
                    name="expMonth"
                    placeholder="MM"
                    type="text"
                  />
                  <p className="form__text">{formErrors.expMonth}</p>
                </div>
                <div>
                  <input
                    onChange={handleInput}
                    value={formValues.expYear}
                    className="form__input"
                    name="expYear"
                    placeholder="YY"
                    type="text"
                  />
                  <p className="form__text">{formErrors.expYear}</p>
                </div>
              </div>
            </div>

            <div className="form__content  flex-basis-cvc">
              <label className="form__label" for="cvc-number">
                CVC
              </label>
              <input
                onChange={handleInput}
                value={formValues.cvc}
                className="form__input"
                name="cvc"
                placeholder="e.g. 123"
                type="text"
              />
              <p className="form__text">{formErrors.cvc}</p>
            </div>
          </div>
          <button className="form__button" type="submit">
            Confirm
          </button>
        </form>
      )}
    </div>
  );
};

export default InputBoxes;
