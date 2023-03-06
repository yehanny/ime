import { useState } from "react";

const useContactForm = () => {
  const [values, setValues] = useState({
    email_to: "",
    email_from: "",
    fullname: "",
    message: "",
  });

  const handleChange = (e) => {
    setValues((prevState) => {
      return {
        ...prevState,
        [e.target.id]: e.target.value,
      };
    });
  };

  return { values, setValues, handleChange };
};

export default useContactForm;
