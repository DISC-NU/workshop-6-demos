import React from "react";
import { FormProvider } from "../_contexts/FormContext";
import Section from "./Section";

const Form: React.FC = () => {
  return (
    <FormProvider>
      <div>
        <h2>Sign Up</h2>
        <Section />
      </div>
    </FormProvider>
  );
};

export default Form;
