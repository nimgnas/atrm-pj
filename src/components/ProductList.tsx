import styled from "styled-components";
import Product from "./Product";

function ProductList() {
  return (
    <StyledProductList>
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
    </StyledProductList>
  );
}

export default ProductList;

const StyledProductList = styled.div`
  padding: 0 65px;
  margin-top: 100px;
  display: grid;
  justify-content: center;

  grid-template-columns: repeat(auto-fill, minmax(350px, 393px));
  grid-auto-rows: 560px;
  gap: 35px;

  @media ${({ theme }) => theme.responsive.desktop} {
  }
  @media ${({ theme }) => theme.responsive.tablet} {
    padding: 30px;
    justify-content: center;
  }
  @media ${({ theme }) => theme.responsive.mobile} {
    padding: 10px;
  }
`;
