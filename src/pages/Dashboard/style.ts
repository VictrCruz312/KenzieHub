import styled from "styled-components";

export const ContainerDashboard = styled.main`
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
`;

export const ContainerTecnologias = styled.div`
  text-align: start;
  padding: 22px 10vw 0 10vw;

  .containerCreate {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .titleContainer {
      font-weight: 600;
      font-size: 16px;
      line-height: 18px;
      color: rgb(var(--Grey-0));
    }

    .btnCreate {
      background-color: rgb(var(--Grey-3));
      padding: 10px;
      border-radius: 4px;
      display: flex;
      align-items: center;

      svg {
        font-weight: 900;
        background-color: rgba(0, 0, 0, 0);
        color: rgb(var(--Color-white));
      }

      &:hover {
        background-color: rgb(var(--Grey-2));
      }
    }
  }
`;

export const ListTechs = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  background-color: rgb(var(--Grey-3));
  margin-top: 21px;
  padding: 22px 18px;
  border-radius: 4px;

  .tecnologia {
    display: flex;
    justify-content: space-between;
    background-color: rgb(var(--Grey-4));
    height: 48px;
    align-items: center;
    padding: 0 12px;
    border-radius: 4px;

    p {
      font-weight: 700;
      font-size: 14.2123px;
      line-height: 24px;
      color: rgb(var(--Grey-0));
    }

    span {
      font-weight: 400;
      font-size: 12.182px;
      line-height: 22px;
      color: rgb(var(--Grey-1));
    }

    &:hover {
      background-color: rgb(var(--Grey-2));

      span {
        color: rgb(var(--Grey-0));
      }
    }
  }
`;
