import { FunctionComponent, ReactNode } from "react";
import styled from "styled-components";
import { useTheme } from "../Hooks/Context/utils";

const StyledButton = styled.button`
  background-color: #4caf50;
  width: fit-content;
  color: white;
  padding: 12px 24px;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition:
    background-color 0.3s,
    transform 0.2s;

  &:hover {
    background-color: #45a049;
    transform: scale(1.05);
  }

  &:active {
    background-color: #3e8e41;
    transform: scale(0.98);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 5px 2px rgba(72, 163, 69, 0.6);
  }
`;

const StyledLabel = styled.label`
  display: inline-block;
  font-size: 2rem;
  margin: 20px;
`;

interface ButtonProps {
  label?: string;
  children: ReactNode;
  onClick: () => void;
}

const Button: FunctionComponent<ButtonProps> = ({
  label,
  children,
  onClick,
}) => {
  const { theme } = useTheme();
  const themeColor = theme === "light" ? "#333" : "#fff";

  return (
    <div style={{ display: "grid", placeItems: "center" }}>
      <StyledLabel style={{ color: themeColor }}>{label}</StyledLabel>
      <StyledButton id="btn" onClick={onClick}>
        {children}
      </StyledButton>
    </div>
  );
};

export default Button;
