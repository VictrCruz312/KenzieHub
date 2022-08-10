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
    background-color: blue;
    display: flex;
    flex-direction: column;
    gap: 20px;
    border-radius: 4px;

    .navigationModal {
      width: 369px;
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
  }
`;
