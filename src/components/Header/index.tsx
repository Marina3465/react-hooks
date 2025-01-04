import { FunctionComponent } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

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
  heigh: 100vh;

  &.active {
    color: rgb(51, 255, 0);
  }
`;

interface HeaderProps {}

const Header: FunctionComponent<HeaderProps> = () => {
  const id: number = 123;
  const text: string = "Hello! This is useParams)";

  return (
    <StyledHeader>
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
              to={`/useLocations?name=Marina&age=22#trainee`}
              state={"This is state from Header"}
            >
              useLocation
            </ActiveLink>
          </StyledLi>
        </StyledUl>
      </nav>
    </StyledHeader>
  );
};

export default Header;
