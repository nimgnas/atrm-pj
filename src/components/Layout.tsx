import { ReactNode } from "react";
import styled from "styled-components";

function Layout({ children }: { children: ReactNode }) {
  return <StyledLayout>{children}</StyledLayout>;
}

export default Layout;

const StyledLayout = styled.div`
  width: 1440px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
