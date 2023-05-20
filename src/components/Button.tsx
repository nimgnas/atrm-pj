import styled, { css } from "styled-components";

interface IButton {
  colorType: "YELLOW" | "BLACK";
  width: string;
  text?: string;
}

function Button({ colorType, width, text }: IButton) {
  return (
    <StyledButton colorType={colorType} width={width}>
      {text}
    </StyledButton>
  );
}

export default Button;

const StyledButton = styled.div<IButton>`
  height: 41px;
  width: ${({ width }) => width};

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 30px;
  font-size: 14px;
  font-weight: 500;

  ${({ colorType }) => {
    if (colorType === "YELLOW") {
      return css`
        color: black;
        background-color: #ffc700;
      `;
    }

    if (colorType === "BLACK") {
      return css`
        color: white;
        background-color: black;
      `;
    }
  }}
`;
