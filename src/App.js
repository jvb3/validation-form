import { Cards } from "./components/Cards";
import "./styles/styles.css";
import { useState, useEffect } from "react";

function App() {
  const initialValues = {
    name: "",
    number: "",
    expMonth: "",
    expYear: "",
    cvc: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  const reset = (e) => {
    e.preventDefault();
    setFormValues(initialValues);
    setIsSubmit(false);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

  const validate = (values) => {
    const regex = /^[0-9 ]+$/;
    const errors = {};
    if (!values.name) {
      errors.name = "Can't be blank";
    }
    if (!values.number) {
      errors.number = "Can't be blank";
    } else if (!regex.test(values.number)) {
      errors.number = "Wrong format, numbers only";
    }

    if (!values.expMonth) {
      errors.expMonth = "Can't be blank";
    } else if (!regex.test(values.expMonth)) {
      errors.expMonth = "Wrong format, numbers only";
    }

    if (!values.expYear) {
      errors.expYear = "Can't be blank";
    } else if (!regex.test(values.expYear)) {
      errors.expYear = "Wrong format, numbers only";
    }

    if (!values.cvc) {
      errors.cvc = "Can't be blank";
    } else if (!regex.test(values.cvc)) {
      errors.cvc = "Wrong format, numbers only";
    }
    return errors;
  };

  return (
    <div className="app-wrapper">
      <Cards
        handleInput={handleInput}
        formValues={formValues}
        handleSubmit={handleSubmit}
        formErrors={formErrors}
        isSubmit={isSubmit}
        reset={reset}
      />
    </div>
  );
}

export default App;
