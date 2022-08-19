import styled from "styled-components";

interface ITextButton {
  textButton: string;
}

export const HeaderPage = styled.header<ITextButton>`
  width: 92vw;
  min-width: 265px;
  display: flex;
  ${({ textButton }) =>
    textButton !== undefined
      ? "justify-content: space-between"
      : "justify-content: center"};
  margin: 0 auto 48px auto;
  ${({ textButton }) =>
    textButton === "Sair" ? "padding: 28px 10vw" : "padding: 50px 0 0 0"};

  @media screen and (min-width: 420px) {
    ${({ textButton }) =>
      textButton === "Sair" ? "width: 100%" : "width: 400px"};
  }

  a {
    background: rgb(var(--Grey-3));
    border-radius: 4px;
    text-decoration: none;
    padding: 5px 16px;
    font-weight: 600;
    font-size: 12px;
    line-height: 28px;
    text-align: center;
    color: rgb(var(--Grey-0));
  }

  a:hover {
    background: rgb(var(--Grey-2));
  }
`;
