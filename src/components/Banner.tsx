import styled from "styled-components";
import Button from "./Button";

function Banner() {
  return (
    <StyledBanner>
      <Layout>
        <ImgWrapper>
          <Img src="https://github.com/nimgnas/atrm-pj/assets/85691654/e6760ecc-4109-42bc-af3f-dcef12da48ba" />
        </ImgWrapper>
        <TextBox>
          <ItemName>Beats Studio3 Wireless</ItemName>
          <OverView>Experience your music like never before.</OverView>
          <PriceWrapper>
            <PriceText>$299.95</PriceText>
            <Button colorType="YELLOW" width="170px" text="BUY NOW" />
          </PriceWrapper>
          <PromotionalOffer>$60 Apple Music gift card with purchase of select Beats products.*</PromotionalOffer>
        </TextBox>
      </Layout>
    </StyledBanner>
  );
}

export default Banner;

const StyledBanner = styled.div`
  height: 616px;
  margin-bottom: 200px;
  background-color: ${({ theme }) => theme.colors.backgroundBlack};
  display: flex;
  justify-content: center;

  @media ${({ theme }) => theme.responsive.desktop} {
    height: 450px;
  }
  @media ${({ theme }) => theme.responsive.tablet} {
    height: 300px;
    margin-bottom: 500px;
  }
  @media ${({ theme }) => theme.responsive.mobile} {
    height: 208px;
    margin-bottom: 350px;
  }
`;

const Layout = styled.div`
  width: 1440px;
  padding: 0px 65px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media ${({ theme }) => theme.responsive.desktop} {
    width: 1024px;
  }
  @media ${({ theme }) => theme.responsive.tablet} {
    height: 750px;
    width: 768px;
    padding: 0 30px;
    flex-direction: column;
    justify-content: space-between;
  }
  @media ${({ theme }) => theme.responsive.mobile} {
    height: 550px;
    width: 500px;
    padding: 0 10px;
  }
`;

const ImgWrapper = styled.div`
  height: 100%;
  width: 700px;
  position: relative;

  @media ${({ theme }) => theme.responsive.desktop} {
    width: 50%;
  }
  @media ${({ theme }) => theme.responsive.tablet} {
  }
  @media ${({ theme }) => theme.responsive.mobile} {
    height: 300px;
  }
`;

const Img = styled.img`
  height: 766px;
  position: absolute;
  top: 0px;
  left: -80px;

  @media ${({ theme }) => theme.responsive.desktop} {
    height: 550px;
  }
  @media ${({ theme }) => theme.responsive.tablet} {
    height: 500px;
    left: -150px;
  }
  @media ${({ theme }) => theme.responsive.mobile} {
    height: 300px;
    left: -40%;
  }
`;

const TextBox = styled.div`
  height: fit-content;
  width: 50%;
  max-width: 508px;
  color: white;

  @media ${({ theme }) => theme.responsive.tablet} {
    width: 100%;
    color: black;
  }
  @media ${({ theme }) => theme.responsive.mobile} {
    width: 100%;
  }
`;

const ItemName = styled.h5`
  margin-bottom: 20px;
`;

const OverView = styled.h2`
  font-size: 40px;
  font-weight: bold;
  margin-bottom: 30px;

  @media (max-width: 500px) {
    font-size: 32px;
  }
`;

const PriceWrapper = styled.div`
  margin-bottom: 10px;
  display: flex;
  font-weight: 200;

  @media ${({ theme }) => theme.responsive.desktop} {
    flex-direction: column;
  }
  @media ${({ theme }) => theme.responsive.tablet} {
    flex-direction: row;
  }
  @media ${({ theme }) => theme.responsive.mobile} {
    align-items: center;
  }
`;

const PriceText = styled.h2`
  font-size: 40px;
  margin-right: 30px;

  @media ${({ theme }) => theme.responsive.desktop} {
    margin-bottom: 10px;
  }
  @media ${({ theme }) => theme.responsive.tablet} {
    margin-bottom: 0px;
  }
  @media ${({ theme }) => theme.responsive.mobile} {
    font-size: 32px;
  }
`;

const PromotionalOffer = styled.span`
  font-size: 13px;
  color: ${({ theme }) => theme.colors.yellow};

  @media ${({ theme }) => theme.responsive.tablet} {
    color: gray;
  }
`;
