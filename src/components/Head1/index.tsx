import { FunctionComponent, ReactNode } from "react";
import styled from "styled-components";

interface Head1Props {
  children: ReactNode;
  color?: string;
}

const StyledHead1 = styled.h1<{ color?: string }>`
  font-size: 2rem;
  font-weight: 700;
  color: ${(props) => props.color || "#333"};
  text-align: center;
  width: 500px;
`;

const Head1: FunctionComponent<Head1Props> = ({ children, color }) => {
  return <StyledHead1 color={color}>{children}</StyledHead1>;
};

export default Head1;
