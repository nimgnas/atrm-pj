import styled from "styled-components";
import GlobalStyle from "./styles/globalStyle";
import Banner from "./components/Banner";

function App() {
  return (
    <>
      <GlobalStyle />
      <StyledApp>
        <Banner />
        <Body>sdfsfd</Body>
        {/* <Footer></Footer> */}
      </StyledApp>
    </>
  );
}

export default App;

const StyledApp = styled.div``;

const Body = styled.div``;

const Footer = styled.div`
  height: 344px;
  background-color: ${({ theme }) => theme.colors.backgroundBlack};
`;
