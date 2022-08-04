import styled from "styled-components";

export const ContainerLogin = styled.div`
  width: 95vw;
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

  .redirectRegister {
    margin: 0 22px 0 24px;
    border-radius: 4px;
    padding: 10px 0;

    border: 1.2182px solid rgb(var(--Grey-1));
    background-color: rgb(var(--Grey-1));

    font-weight: 500;
    font-size: 16px;
    line-height: 26px;
    color: rgb(var(--Grey-0));

    &:hover {
      background-color: rgb(var(--Grey-2));
      border: 1.2182px solid rgb(var(--Grey-2));
    }
  }
`;
