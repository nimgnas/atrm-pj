import styled from "styled-components";
import Button from "./Button";
import useProgressiveImg from "../hooks/useProgressiveImg";

interface RadioProps {
  color: "white" | "tomato" | "black";
}

interface IMainProduct {
  name: string;
  des: string;
  price: string;
  placeHolderImg: string;
  img: string;
}

function MainProduct({ mainProduct }: { mainProduct: IMainProduct }) {
  const { name, des, price, placeHolderImg, img } = mainProduct;
  const progressImg = useProgressiveImg({ placeholderSrc: placeHolderImg, originalSrc: img });

  return (
    <StyledMainProduct>
      <TextBox>
        <OverView>{des}</OverView>
        <ItemName>
          {name}
          <span>+</span>
        </ItemName>
        <ColorContainer>
          <AvailableColors>Avaliable Colors</AvailableColors>
          <FindYourColor>Find your Color</FindYourColor>
          <ColorRadioGroup>
            <RadioWrapper>
              <RadioCircle color="white" />
              <ColorRadio type="radio" name="colorSet" />
            </RadioWrapper>
            <RadioWrapper>
              <RadioCircle color="tomato" />
              <ColorRadio type="radio" name="colorSet" />
            </RadioWrapper>
            <RadioWrapper>
              <RadioCircle color="black" />
              <ColorRadio type="radio" name="colorSet" />
            </RadioWrapper>
          </ColorRadioGroup>
        </ColorContainer>
        <PriceWrapper>
          <PriceText>{price}</PriceText>
          <Button colorType="BLACK" width="170px" text="BUY NOW" />
        </PriceWrapper>
        <PromotionalOffer>$60 Apple Music gift card with purchase of select Beats products.*</PromotionalOffer>
      </TextBox>
      <Img src={img} />
    </StyledMainProduct>
  );
}

export default MainProduct;

const StyledMainProduct = styled.div`
  height: 400px;
  margin-top: 100px;
  padding-left: 65px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media ${({ theme }) => theme.responsive.desktop} {
  }
  @media ${({ theme }) => theme.responsive.tablet} {
    height: 600px;
    padding-left: 30px;
    flex-direction: column-reverse;
  }
  @media ${({ theme }) => theme.responsive.mobile} {
    height: 500px;
    margin-top: 130px;
    padding-left: 10px;
  }
`;

const TextBox = styled.div`
  width: 100%;
  max-width: 508px;

  @media ${({ theme }) => theme.responsive.tablet} {
    font-size: 13px;
  }
`;

const OverView = styled.span`
  display: block;
  margin-bottom: 0.625em;
  font-weight: 350;
  color: gray;
`;

const ItemName = styled.h2`
  margin-bottom: 0.5em;
  font-size: 3.125em;
  font-weight: bold;

  span {
    font-size: 2.5rem;
    font-weight: 500;
    position: relative;
    bottom: 0.6em;
  }
`;

const ColorContainer = styled.div``;

const AvailableColors = styled.h3`
  margin-bottom: 0.25em;
  font-size: 2.5em;
  font-weight: 300;
  letter-spacing: 2px;
`;

const FindYourColor = styled.span`
  display: block;
  margin-bottom: 10px;
  font-weight: 350;
  color: gray;
`;

const ColorRadioGroup = styled.div`
  width: 130px;
  margin-bottom: 2.5em;
  display: flex;
  justify-content: space-between;
`;

const RadioWrapper = styled.div`
  position: relative;
  width: fit-content;
`;

const RadioCircle = styled.div<RadioProps>`
  height: 30px;
  width: 30px;
  border: 1px solid gray;
  border-radius: 50%;
  background-color: ${({ color }) => color};
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -1px 0px inset;
  position: absolute;
  top: 5.5px;
  right: 5.5px;
  pointer-events: none;
`;

const ColorRadio = styled.input`
  appearance: none;
  border-radius: 50%;
  width: 35px;
  height: 35px;
  margin-left: 0;

  &:checked {
    border: 1px solid;
  }
`;

const PriceWrapper = styled.div`
  margin-bottom: 10px;
  display: flex;
  align-items: center;
`;

const PriceText = styled.h2`
  margin-right: 30px;
  font-size: 2.5em;
  font-weight: 300;
`;

const PromotionalOffer = styled.span`
  color: gray;
`;

const Img = styled.img`
  height: 380px;

  @media ${({ theme }) => theme.responsive.desktop} {
    height: 280px;
  }
  @media ${({ theme }) => theme.responsive.tablet} {
    height: 280px;
  }
  @media ${({ theme }) => theme.responsive.mobile} {
    height: 170px;
  }
`;
