import React from "react";

interface ButtonProps {
  label: string;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onFocus?: () => void;
  onBlur?: () => void;
  onDoubleClick?: () => void;
  disabled?: boolean;
  style?: React.CSSProperties;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  onMouseEnter,
  onFocus,
  onBlur,
  onDoubleClick,
  disabled,
  style,
}) => {
  return (
    <button
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onFocus={onFocus}
      onBlur={onBlur}
      onDoubleClick={onDoubleClick}
      disabled={disabled}
      style={style}
    >
      {label}
    </button>
  );
};

export default Button;
