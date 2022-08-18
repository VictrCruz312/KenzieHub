import styled from "styled-components";

export const Modals = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);

  .containerModal {
    background-color: rgb(var(--Grey-3));
    width: 97vw;
    height: 342px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    border-radius: 4px;

    @media screen and (min-width: 375px) {
      width: 369px;
    }

    .navigationModal {
      width: 100%;
      display: flex;
      justify-content: space-between;
      background-color: rgb(var(--Grey-2));
      padding: 13px 20px;
      border-radius: 4px;

      h1 {
        font-weight: 700;
        font-size: 14px;
        line-height: 24px;
        color: rgb(var(--Grey-0));
      }

      button {
        background-color: rgba(0, 0, 0, 0);

        svg {
          color: rgb(var(--Grey-1));
          width: 17px;
          height: 17px;
        }
      }
    }

    .form {
      display: flex;
      flex-direction: column;
      gap: 15px;

      .containerInput {
        height: 72px;
        align-items: flex-start;
        justify-content: space-between;
        margin: 0 22px 0 24px;

        .ContainerNameAndError {
          display: flex;
          justify-content: space-between;
          width: 100%;

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
      }

      .containerButton {
        margin: 0 22px 0 24px;
        display: flex;
        align-items: center;
        gap: 22px;

        button {
          border: 1.2182px solid rgb(var(--Color-primary));
          border-radius: 4.06066px;
          background-color: rgb(var(--Color-primary));
          width: 100%;
          font-weight: 500;
          font-size: 16px;
          line-height: 26px;
          color: rgb(var(--Grey-0));
          padding: 10px 0;

          &:hover {
            background-color: rgb(var(--Color-primary-Focus));
          }
        }
        .btnDelete {
          background-color: rgb(var(--Grey-1));
          border: 1.2182px solid rgb(var(--Grey-1));
          width: 100px;
          &:hover {
            background-color: rgb(var(--Grey-2));
            border: 1.2182px solid rgb(var(--Grey-2));
          }
        }
      }
    }
  }
`;
