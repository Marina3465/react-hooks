import { FunctionComponent } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { useTheme } from "../Hooks/Context/utils";

const StyledHeader = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #333;
  padding: 10px 0;
  text-align: left;
`;

const StyledUl = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const StyledLi = styled.li`
  display: inline;
  margin: 0px 15px;

  &:hover {
    background-color: rgb(102, 102, 102);
    transform: scale(1.2);
    transition: all 0.3s ease;
  }
`;

const ActiveLink = styled(NavLink)`
  color: #fff;
  text-decoration: none;
  font-size: 18px;
  height: 100vh;

  &.active {
    color: rgb(51, 255, 0);
  }
`;

interface HeaderProps {}

const Header: FunctionComponent<HeaderProps> = () => {
  const id: number = 123;
  const text: string = "Hello! This is useParams)";
  const { theme } = useTheme();
  const themeColor = theme === "light" ? "#333" : "#000";

  return (
    <StyledHeader style={{ backgroundColor: themeColor }}>
      <nav>
        <StyledUl>
          <StyledLi>
            <ActiveLink to="/">useState</ActiveLink>
          </StyledLi>
          <StyledLi>
            <ActiveLink to="/useEffect">useEffect</ActiveLink>
          </StyledLi>
          <StyledLi>
            <ActiveLink to={`/useParams/id/${id}/text/${text}`}>
              useParams
            </ActiveLink>
          </StyledLi>
          <StyledLi>
            <ActiveLink
              to={`/useLocation?name=Marina&age=22#trainee`}
              state={{ textHeader: "This is text from Header" }}
            >
              useLocation
            </ActiveLink>
          </StyledLi>
          <StyledLi>
            <ActiveLink to="/useNavigate">useNavigate</ActiveLink>
          </StyledLi>
          <StyledLi>
            <ActiveLink to="/useContext">useContext</ActiveLink>
          </StyledLi>
        </StyledUl>
      </nav>
    </StyledHeader>
  );
};

export default Header;
