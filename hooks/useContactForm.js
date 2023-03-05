import { useState } from "react";

const useContactForm = () => {
  const [values, setValues] = useState({
    email: "",
    fullname: "",
    message: "",
    email_from: "",
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
