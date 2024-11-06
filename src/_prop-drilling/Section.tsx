// src/Section.tsx
import React from "react";
import Input from "./Input";
import Button from "./Button";

interface FormData {
  name: string;
  email: string;
  password: string;
}

interface SectionProps {
  formData: FormData;
  updateForm: (key: keyof FormData, value: string) => void;
}

const Section: React.FC<SectionProps> = ({ formData, updateForm }) => {
  return (
    <div>
      <Input
        label="Name"
        value={formData.name}
        onChange={(value) => updateForm("name", value)}
      />
      <Input
        label="Email"
        value={formData.email}
        onChange={(value) => updateForm("email", value)}
      />
      <Input
        label="Password"
        value={formData.password}
        onChange={(value) => updateForm("password", value)}
      />
      <Button formData={formData} />
    </div>
  );
};

export default Section;
