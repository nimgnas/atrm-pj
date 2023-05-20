import styled from "styled-components";
import Button from "./Button";

function Banner() {
  return (
    <StyledBanner>
      <Layout>
        <Img src="https://github.com/nimgnas/atrm-pj/assets/85691654/e6760ecc-4109-42bc-af3f-dcef12da48ba" />
        <TextBox>
          <ItemName>Beats Studio3 Wireless</ItemName>
          <OverView>Experience your music like never before.</OverView>
          <PriceWrapper>
            <PriceText>$299.95</PriceText>
            <Button colorType="YELLOW" width="170px" text="BUY NOW" />
          </PriceWrapper>
          <WarningText>$60 Apple Music gift card with purchase of select Beats products.*</WarningText>
        </TextBox>
      </Layout>
    </StyledBanner>
  );
}

export default Banner;

const StyledBanner = styled.div`
  height: 616px;
  background-color: #2b2835;
  display: flex;
  justify-content: center;

  @media (max-width: 1024px) {
    height: 500px;
  }

  @media (max-width: 768px) {
    height: 300px;
    margin-bottom: 500px;
  }

  @media (max-width: 500px) {
    height: 208px;
    margin-bottom: 350px;
  }
`;

const Layout = styled.div`
  width: 1440px;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media (max-width: 1024px) {
    width: 1024px;
  }

  @media (max-width: 768px) {
    height: 750px;
    width: 768px;
    flex-direction: column;
    justify-content: space-between;
  }

  @media (max-width: 500px) {
    height: 300px;
    width: 500px;
    /* padding: 0px 30px; */
  }
`;

const Img = styled.img`
  height: 766px;
  position: relative;
  top: 76px;

  @media (max-width: 1024px) {
    height: 600px;
    top: 50px;
  }

  @media (max-width: 768px) {
    height: 500px;
    top: 0px;
  }

  @media (max-width: 500px) {
    height: 300px;
  }
`;

const TextBox = styled.div`
  height: fit-content;
  max-width: 508px;
  color: white;

  @media (max-width: 768px) {
    color: black;
  }
  @media (max-width: 500px) {
    padding: 0px 30px;
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
  display: flex;
  font-weight: 200;
  margin-bottom: 10px;

  @media (max-width: 1200px) {
    flex-direction: column;
  }

  @media (max-width: 768px) {
    flex-direction: row;
  }
  @media (max-width: 500px) {
    align-items: center;
  }
`;

const PriceText = styled.h2`
  font-size: 40px;
  margin-right: 30px;

  @media (max-width: 1200px) {
    margin-bottom: 10px;
  }
  @media (max-width: 768px) {
    margin-bottom: 0px;
  }
  @media (max-width: 500px) {
    font-size: 32px;
  }
`;

const WarningText = styled.span`
  font-size: 13px;
  color: #ffc700;

  @media (max-width: 768px) {
    color: black;
  }
`;
