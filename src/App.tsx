import styled from "styled-components";
import GlobalStyle from "./styles/globalStyle";
import Banner from "./components/Banner";
import MainProduct from "./components/MainProduct";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import { Layout } from "./styles/common";

import products from "./json/products.json";

function App() {
  const { bannerProduct, mainProduct, products: productList } = products;

  return (
    <>
      <GlobalStyle />
      <StyledApp>
        <Navigation />
        <Banner bannerProduct={bannerProduct} />
        <Body>
          <Layout>
            <MainProduct mainProduct={mainProduct} />
            <ProductList productList={productList} />
          </Layout>
        </Body>
        <Footer />
      </StyledApp>
    </>
  );
}

export default App;

const StyledApp = styled.div``;

const Body = styled.div`
  display: flex;
  justify-content: center;
`;
