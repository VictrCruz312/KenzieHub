import styled from "styled-components";

export const ContainerDashboard = styled.div`
  .Perfil {
    border-top: 1px solid rgb(var(--Grey-3));
    border-bottom: 1px solid rgb(var(--Grey-3));
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 45px 10vw;

    h1 {
      font-weight: 700;
      font-size: 18px;
      line-height: 28px;
      color: rgb(var(--Grey-0));
    }

    h3 {
      font-weight: 400;
      font-size: 12px;
      line-height: 22px;
      color: rgb(var(--Grey-1));
    }
  }

  .coding {
    text-align: start;
    padding: 0 10vw;

    h1 {
      font-weight: 700;
      font-size: 18px;
      line-height: 28px;
      color: rgb(var(--Grey-0));
      margin: 37px 0 23px 0;
    }

    h3 {
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      color: rgb(var(--Grey-0));
    }
  }
`;
