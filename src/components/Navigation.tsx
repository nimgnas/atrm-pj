import styled from "styled-components";
import { Layout } from "../styles/common";
import MediaQuery from "react-responsive";

function Navigation() {
  return (
    <StyledNavigation>
      <NavLayout>
        <LogoWrapper>
          <Logo src={require("../assets/logo.png")} />
        </LogoWrapper>
        <MediaQuery minWidth={958}>
          <TitleContainer>
            <Title>HEADPHONES</Title>
            <Title>EARPHONES</Title>
            <Title>SPEAKERS</Title>
            <Title>EXPLORE</Title>
          </TitleContainer>
        </MediaQuery>
        <IconsContainer>
          <MediaQuery minWidth={958}>
            <IconWrapper>
              <Icon src={require("../assets/icons/search.png")} />
            </IconWrapper>
            <IconWrapper>
              <Icon src={require("../assets/icons/profile.png")} />
            </IconWrapper>
            <IconWrapper>
              <Icon src={require("../assets/icons/buy.png")} />
            </IconWrapper>
          </MediaQuery>
          <MediaQuery maxWidth={958}>
            <IconWrapper>
              <Icon src={require("../assets/icons/Group.png")} />
            </IconWrapper>
          </MediaQuery>
        </IconsContainer>
      </NavLayout>
    </StyledNavigation>
  );
}

export default Navigation;

const StyledNavigation = styled.div`
  height: 65px;
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.3);
  position: absolute;
  z-index: 1;

  @media ${({ theme }) => theme.responsive.tablet} {
    background-color: inherit;
  }
`;

const NavLayout = styled(Layout)`
  display: flex;
  justify-content: space-between;
`;

const LogoWrapper = styled.div`
  height: 100%;
  padding: 10px 0px;
  width: 15%;

  @media ${({ theme }) => theme.responsive.tablet} {
    padding: 15px 0px 15px 20px;
  }
`;

const Logo = styled.img`
  height: 100%;
`;

const TitleContainer = styled.ul`
  width: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 100px;
`;

const Title = styled.li`
  color: white;
`;

const IconsContainer = styled.div`
  width: 15%;
  padding: 20px 0px;
  display: flex;
  justify-content: space-between;

  @media ${({ theme }) => theme.responsive.tablet} {
    padding: 21px 20px 21px 0px;
    justify-content: flex-end;
  }
`;

const IconWrapper = styled.div``;

const Icon = styled.img`
  height: 100%;
`;
