import styled from "styled-components";
import GlobalStyle from "./styles/globalStyle";
import Banner from "./components/Banner";
import MainProduct from "./components/MainProduct";

function App() {
  return (
    <>
      <GlobalStyle />
      <StyledApp>
        <Banner />
        <Body>
          <Layout>
            <MainProduct />
          </Layout>
        </Body>
        {/* <Footer></Footer> */}
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

const Layout = styled.div`
  width: 1440px;
  /* padding: 0px 65px; */
  /* padding-left: 65px; */

  @media ${({ theme }) => theme.responsive.desktop} {
    width: 1024px;
  }
  @media ${({ theme }) => theme.responsive.tablet} {
    width: 768px;
  }
  @media ${({ theme }) => theme.responsive.mobile} {
    width: 500px;
  }
`;

const Footer = styled.div`
  height: 344px;
  background-color: ${({ theme }) => theme.colors.backgroundBlack};
`;
