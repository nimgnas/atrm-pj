import styled from "styled-components";

function Footer() {
  return <StyledFooter></StyledFooter>;
}

const StyledFooter = styled.div`
  height: 344px;
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.backgroundBlack};
`;

export default Footer;
