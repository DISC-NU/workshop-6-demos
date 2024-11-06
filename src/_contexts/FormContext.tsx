import React, { createContext, useContext, useState, ReactNode } from "react";

interface FormData {
  name: string;
  email: string;
  password: string;
}

interface FormContextType {
  formData: FormData;
  updateForm: (key: keyof FormData, value: string) => void;
}

const FormContext = createContext<FormContextType | undefined>(undefined);

export const useFormContext = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error("useFormContext must be used within a FormProvider");
  }
  return context;
};

interface FormProviderProps {
  children: ReactNode;
}

export const FormProvider: React.FC<FormProviderProps> = ({ children }) => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    password: "",
  });

  const updateForm = (key: keyof FormData, value: string) => {
    setFormData({ ...formData, [key]: value });
  };

  return (
    <FormContext.Provider value={{ formData, updateForm }}>
      {children}
    </FormContext.Provider>
  );
};
