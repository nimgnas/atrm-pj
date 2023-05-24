import styled, { css } from "styled-components";
import Button from "./Button";

interface IProduct {
  name: string;
  specification: string[];
  price: string;
  img: string;
  isLine: boolean;
}

function Product({ product }: { product: IProduct }) {
  const { name, specification, price, img, isLine } = product;

  return (
    <StyledProduct>
      <ImgWrapper>
        <Img src={img} isLine={isLine} />
      </ImgWrapper>
      <TextBox>
        <ItemName>{name}</ItemName>
        <Specification>
          {specification.map((spec) => (
            <li>{spec}</li>
          ))}
        </Specification>
        <PriceWrapper>
          <PriceText>{price}</PriceText>
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

const Img = styled.img<{ isLine: boolean }>`
  position: absolute;
  height: 100%;
  width: 100%;
  padding: 10px 20px 20px 20px;
  object-fit: contain;

  ${({ isLine }) => {
    if (isLine) {
      return css`
        height: 120%;
        width: auto;
        top: 100px;
        left: 100px;
      `;
    }
  }}
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
