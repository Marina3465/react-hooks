import { FunctionComponent, ReactNode } from "react";
import styled from "styled-components";
import { useTheme } from "../Hooks/Context/utils";

interface Head1Props {
  children: ReactNode;
  color?: string;
}

const StyledHead1 = styled.h1<{ color?: string }>`
  font-size: 2rem;
  font-weight: 700;
  color: ${(props) => props.color};
  text-align: center;
  width: 500px;
`;

const Head1: FunctionComponent<Head1Props> = ({ children, color }) => {
  const { theme } = useTheme();
  const themeColor = theme === "light" ? "#333" : "#fff";

  return <StyledHead1 color={color || themeColor}>{children}</StyledHead1>;
};

export default Head1;
