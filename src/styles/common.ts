import styled from "styled-components";

export const Layout = styled.div`
  width: 1440px;

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
