import styled from "styled-components";
import { Layout } from "../styles/common";
import MediaQuery from "react-responsive";

function Footer() {
  return (
    <StyledFooter>
      <FooterLayout>
        <Column>
          <Logo src={require("../assets/logo.png")} />
        </Column>
        <Column>
          <Title>Products</Title>
          <Item>EARPHONES</Item>
          <Item>SPEAKERS</Item>
          <Item>ACCESSORIES</Item>
          <Item>COLLABORATIONS</Item>
          <Item>BEATSAUDIO</Item>
          <Item>SPECIAL OFFERS</Item>
        </Column>
        <Column>
          <Title>Support</Title>
          <MediaQuery minWidth={958}>
            <Item>SERVICE & WARRANTY</Item>
            <Item>REGISTER YOUR BEATS</Item>
            <Item>UPDATE YOUR BEATS</Item>
            <Item>AUTHORIZED SERVICE PROVIDERS</Item>
            <Item>CONTACT SUPPORT</Item>
            <Item>INTERNATIONAL NUMBERS</Item>
          </MediaQuery>
        </Column>
        <Column>
          <Title>Company</Title>
          <MediaQuery minWidth={958}>
            <Item>EARPHONES</Item>
            <Item>SPEAKERS</Item>
            <Item>ACCESSORIES</Item>
            <Item>COLLABORATIONS</Item>
            <Item>BEATSAUDIO</Item>
            <Item>SPECIAL OFFERS</Item>
          </MediaQuery>
        </Column>
        <Column>
          <Title>Follow Us</Title>
          <SocialIcon src="https://github.com/nimgnas/atrm-pj/assets/85691654/45c7308a-af81-47ff-9451-9d4725a4694a" />
        </Column>
      </FooterLayout>
    </StyledFooter>
  );
}

export default Footer;

const StyledFooter = styled.div`
  height: 344px;
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.backgroundBlack};

  @media ${({ theme }) => theme.responsive.tablet} {
    height: fit-content;
  }
`;

const FooterLayout = styled(Layout)`
  display: flex;
  justify-content: space-between;

  @media ${({ theme }) => theme.responsive.tablet} {
    flex-direction: column;
  }
  @media ${({ theme }) => theme.responsive.mobile} {
  }
`;

const Column = styled.ul`
  width: 100%;
  padding: 50px 20px 0px 20px;
  display: flex;
  flex-direction: column;
  line-height: 25px;

  &:first-child {
    align-items: center;
  }

  &:last-child {
    justify-content: start;
    align-items: start;
    margin-bottom: 20px;
  }

  @media ${({ theme }) => theme.responsive.tablet} {
    padding: 30px 20px 0px 20px;

    &:not(:first-child):not(:last-child) {
      border-bottom: 1px solid;
    }
  }

  @media ${({ theme }) => theme.responsive.mobile} {
    align-items: start;
  }
`;

const Title = styled.h3`
  margin-bottom: 15px;
  font-size: 1.5em;
  font-weight: 500;
  color: white;
`;

const Item = styled.li`
  font-size: 0.88em;
  font-weight: 400;
  color: gray;
  white-space: nowrap;

  &:last-child {
    margin-bottom: 15px;
  }
`;

const Logo = styled.img``;

const SocialIcon = styled.img`
  height: 28px;
  object-fit: contain;
`;
