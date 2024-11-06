import React from "react";

interface FormData {
  name: string;
  email: string;
  password: string;
}

interface ButtonProps {
  formData: FormData;
}

const Button: React.FC<ButtonProps> = ({ formData }) => {
  const handleSubmit = () => {
    alert(`Form submitted with data:\n${JSON.stringify(formData, null, 2)}`);
  };

  return <button onClick={handleSubmit}>Submit</button>;
};

export default Button;
