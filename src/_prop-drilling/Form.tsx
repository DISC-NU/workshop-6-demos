import React, { useState } from "react";
import Section from "./Section";

interface FormData {
  name: string;
  email: string;
  password: string;
}

const Form: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    password: "",
  });

  const updateForm = (key: keyof FormData, value: string) => {
    setFormData({ ...formData, [key]: value });
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <Section formData={formData} updateForm={updateForm} />
    </div>
  );
};

export default Form;
