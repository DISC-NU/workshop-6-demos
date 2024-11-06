import React from "react";
import { useFormContext } from "../_contexts/FormContext";

interface InputProps {
  label: string;
  field: "name" | "email" | "password";
}

const Input: React.FC<InputProps> = ({ label, field }) => {
  const { formData, updateForm } = useFormContext();

  return (
    <div>
      <label>{label}</label>
      <input
        type={field === "password" ? "password" : "text"}
        value={formData[field]}
        onChange={(e) => updateForm(field, e.target.value)}
      />
    </div>
  );
};

export default Input;
