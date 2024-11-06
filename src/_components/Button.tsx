import React from "react";
import { useFormContext } from "../_contexts/FormContext";

const Button: React.FC = () => {
  const { formData } = useFormContext();

  const handleSubmit = () => {
    alert(`Form submitted with data:\n${JSON.stringify(formData, null, 2)}`);
  };

  return <button onClick={handleSubmit}>Submit</button>;
};

export default Button;
