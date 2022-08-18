import styled from "styled-components";

export const ContainerRegister = styled.div`
  width: 92vw;
  min-width: 265px;
  margin: 0 auto;
  padding: 45px 0 22px 0;
  display: flex;
  flex-direction: column;
  gap: 28px;
  background-color: rgb(var(--Grey-3));
  box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;

  @media screen and (min-width: 420px) {
    width: 400px;
  }

  .containerRegisterTexts {
    h1 {
      font-weight: 700;
      font-size: 18px;
      line-height: 28px;
      color: rgb(var(--Grey-0));
      margin-bottom: 22px;
    }

    p {
      font-weight: 400;
      font-size: 12px;
      line-height: 22px;
      color: rgb(var(--Grey-1));
    }
  }
`;
