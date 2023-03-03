import { useState } from "react";

const useContactForm = () => {
  const [values, setValues] = useState({
    email: "",
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

  return { values, handleChange };
};

export default useContactForm;
