import styled from "styled-components";
import Product from "./Product";
import ProductListFooter from "./ProductListFooter";

function ProductList() {
  return (
    <StyledProductList>
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <ProductListFooter />
    </StyledProductList>
  );
}

export default ProductList;

const StyledProductList = styled.div`
  padding: 0 10px;
  margin-top: 100px;
  margin-bottom: 70px;
  display: grid;
  justify-content: space-between;

  grid-template-columns: repeat(auto-fill, minmax(350px, 393px));
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
