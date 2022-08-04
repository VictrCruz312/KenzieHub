import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;

  .containerInput {
    height: 72px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    margin: 0 22px 0 24px;

    .ContainerNameAndError {
      display: flex;
      justify-content: space-between;
      width: 100%;
    }

    input,
    select {
      width: 100%;
      height: 48px;
      padding: 0 0 0 16px;
      border: 1.2182px solid rgb(var(--Grey-2));
      border-radius: 4px;
      background-color: rgb(var(--Grey-2));
      font-weight: 400;
      font-size: 16.2426px;
      line-height: 26px;
      color: rgb(var(--Grey-0));
    }

    input::placeholder {
      font-weight: 400;
      font-size: 16.2426px;
      line-height: 26px;
      color: rgb(var(--Grey-1));
    }

    label {
      font-weight: 400;
      font-size: 9.73988px;
      color: rgb(var(--Grey-0));
    }

    span {
      color: rgb(var(--Negative));
      font-style: italic;
      font-size: 10px;
      justify-self: flex-end;
    }
  }

  button {
    ${({ errors }) =>
      Object.keys(errors).length === 0
        ? "background:rgb(var(--Color-primary))"
        : "background:rgb(var(--Color-primary-Negative))"};
    font-weight: 500;
    font-size: 16px;
    line-height: 26px;
    color: rgb(var(--Grey-0));

    height: 48px;
    border: 1px solid rgb(var(--Color-primary-Negative));
    border-radius: 4px;
    margin: 0 22px 0 24px;

    &:hover {
      background-color: rgb(var(--Color-primary-Focus));
    }
  }
`;
