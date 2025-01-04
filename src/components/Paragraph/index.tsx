import { FunctionComponent, ReactNode } from "react";
import styled from "styled-components";

interface ParagraphProps {
  children: ReactNode;
}

const StyledP = styled.p`
  font-size: 20px;
  text-align: left;
`;

const Paragraph: FunctionComponent<ParagraphProps> = ({ children }) => {
  return <StyledP>{children}</StyledP>;
};

export default Paragraph;
