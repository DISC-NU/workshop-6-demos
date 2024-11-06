import React from "react";
import Button from "./_components/Button";

function App() {
  const handleClick = () => alert("Button clicked!");
  const handleMouseEnter = () => console.log("Mouse entered!");
  const handleFocus = () => console.log("Button focused!");
  const handleBlur = () => console.log("Button blurred!");
  const handleDoubleClick = () => alert("Button double-clicked!");

  return (
    <div>
      <h1>Generic Button Demo with Inline Styles</h1>

      <Button
        label="Click Me"
        onClick={handleClick}
        style={{
          backgroundColor: "blue",
          color: "white",
          padding: "10px 20px",
          borderRadius: "5px",
        }}
      />

      <Button
        label="Hover Over Me"
        onMouseEnter={handleMouseEnter}
        style={{
          backgroundColor: "green",
          color: "white",
          padding: "10px 20px",
          borderRadius: "5px",
        }}
      />

      <Button
        label="Focus on Me"
        onFocus={handleFocus}
        onBlur={handleBlur}
        style={{
          backgroundColor: "purple",
          color: "white",
          padding: "10px 20px",
          borderRadius: "5px",
        }}
      />

      <Button
        label="Double Click Me"
        onDoubleClick={handleDoubleClick}
        style={{
          backgroundColor: "orange",
          color: "black",
          padding: "10px 20px",
          borderRadius: "5px",
        }}
      />

      <Button
        label="Disabled Button"
        disabled
        style={{
          backgroundColor: "grey",
          color: "white",
          padding: "10px 20px",
          borderRadius: "5px",
        }}
      />
    </div>
  );
}

export default App;
