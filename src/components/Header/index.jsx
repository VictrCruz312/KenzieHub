import { Link } from "react-router-dom";
import { HeaderPage } from "./style";

const Header = ({ textButton, redirect, setUserInfo, notify }) => {
  const isLoggout = (loggout) => {
    if (loggout === "Sair") {
      localStorage.clear();
      notify("success", "deslogado");
      setUserInfo("");
    }
  };

  return (
    <HeaderPage textButton={textButton}>
      <img src="./assets/Logo.svg" alt="Logo" />
      {textButton && (
        <Link onClick={() => isLoggout(textButton)} to={`${redirect}`}>
          {textButton}
        </Link>
      )}
    </HeaderPage>
  );
};

export default Header;
