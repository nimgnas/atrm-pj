import styled from "styled-components";
import Button from "./Button";

function Product() {
  return (
    <StyledProduct>
      <ImgWrapper>
        <Img src="https://github.com/nimgnas/atrm-pj/assets/85691654/8737b114-a6c7-4e02-adf7-dd2ab9a7313b" />
      </ImgWrapper>
      <TextBox>
        <ItemName>Beatsx</ItemName>
        <Specification>
          <li>Up to 8 hours of battery life</li>
          <li>With Fast Fuel, a 5-minute charge = 2 hours of playback</li>
        </Specification>
        <PriceWrapper>
          <PriceText>$999.95</PriceText>
          <Button colorType="BLACK" width="145px" text="BUY NOW" />
        </PriceWrapper>
      </TextBox>
    </StyledProduct>
  );
}

export default Product;

const StyledProduct = styled.div`
  background-color: whitesmoke;

  @media ${({ theme }) => theme.responsive.tablet} {
    font-size: 13px;
  }
`;

const ImgWrapper = styled.div`
  height: 360px;
  position: relative;
`;

const Img = styled.img`
  position: absolute;
  height: 100%;
  width: 100%;
  padding: 10px 20px 20px 20px;
  object-fit: contain;

  /* if 줄이어폰 */
  /* top: 150px;
  left: 30px; */
`;

const TextBox = styled.div`
  height: 200px;
  width: 80%;
  padding: 0px 20px 20px 20px;
`;

const ItemName = styled.h2`
  margin-bottom: 5px;
  font-size: 3.125em;
  font-weight: 500;
`;

const Specification = styled.ul`
  font-size: 0.875em;
  line-height: 1.285em;
  margin-bottom: 20px;
`;

const PriceWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const PriceText = styled.h2`
  font-size: 25px;
  font-weight: 600;
  color: #9d8220;
  margin-right: 30px;
`;
