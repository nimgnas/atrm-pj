import styled from "styled-components";
import Product from "./Product";
import ProductListFooter from "./ProductListFooter";

interface IProductList {
  name: string;
  specification: string[];
  price: string;
  img: string;
  isLine: boolean;
}

function ProductList({ productList }: { productList: IProductList[] }) {
  return (
    <StyledProductList>
      {productList.map((product) => (
        <Product product={product} />
      ))}
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
  justify-content: center;

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
