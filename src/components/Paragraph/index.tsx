import { FunctionComponent, ReactNode } from "react";
import styled from "styled-components";
import { useTheme } from "../Hooks/Context/utils";

interface ParagraphProps {
  children: ReactNode;
}

const StyledP = styled.p`
  font-size: 20px;
  text-align: left;
`;

const Paragraph: FunctionComponent<ParagraphProps> = ({ children }) => {
  const { theme } = useTheme();
  const themeColor = theme === "light" ? "#333" : "#fff";

  return <StyledP style={{ color: themeColor }}>{children}</StyledP>;
};

export default Paragraph;
