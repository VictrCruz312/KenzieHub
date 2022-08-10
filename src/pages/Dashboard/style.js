import styled from "styled-components";

export const ContainerDashboard = styled.div`
  .Perfil {
    border-top: 1px solid rgb(var(--Grey-3));
    border-bottom: 1px solid rgb(var(--Grey-3));
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 45px 10vw;

    .perfil__name {
      font-weight: 700;
      font-size: 18px;
      line-height: 28px;
      color: rgb(var(--Grey-0));
    }

    .perfil__module {
      font-weight: 400;
      font-size: 12px;
      line-height: 22px;
      color: rgb(var(--Grey-1));
    }
  }

  .tecnologias {
    text-align: start;
    padding: 0 10vw;
  }
`;
