import React from "react";
import Input from "./Input";
import Button from "./Button";

const Section: React.FC = () => (
  <div>
    <Input label="Name" field="name" />
    <Input label="Email" field="email" />
    <Input label="Password" field="password" />
    <Button />
  </div>
);

export default Section;
