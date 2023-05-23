import styled from "styled-components";
import Button from "./Button";

function ProductListFooter() {
  return (
    <StyledProductListFooter>
      <TextBox>
        <HearItFirst>Hear it First</HearItFirst>
        <PromotionalOffer>Get updates on product drops, collaborations and all things Beats.</PromotionalOffer>
        <Form>
          <MailInput placeholder="Enter your email" />
          <Button colorType="YELLOW" width="100%" text="SIGN UP" />
        </Form>
      </TextBox>
    </StyledProductListFooter>
  );
}

export default ProductListFooter;

const StyledProductListFooter = styled.div`
  height: 335px;
  display: flex;
  padding: 10px 30px;
  justify-content: center;
  align-items: center;
  background-color: whitesmoke;

  grid-column: 1/-1;
  grid-row: -1/0;

  @media ${({ theme }) => theme.responsive.tablet} {
    font-size: 13px;
  }
`;

const TextBox = styled.div`
  text-align: center;
`;

const HearItFirst = styled.h1`
  font-size: 3.13em;
  font-weight: 700;
`;

const PromotionalOffer = styled.span`
  display: inline-block;
  margin: 1.25em 0px 3.13em 0px;
  color: gray;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const MailInput = styled.input`
  height: 41px;
  width: 100%;
  padding: 0px 2em;
  border: 1px solid gray;
  border-radius: 30px;
  font-size: 0.88em;
`;
