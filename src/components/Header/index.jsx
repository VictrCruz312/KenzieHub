import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import { HeaderPage } from "./style";

const Header = ({ textButton, redirect }) => {
  const { loggout } = useContext(UserContext);

  return (
    <HeaderPage textButton={textButton}>
      <img src="./assets/Logo.svg" alt="Logo" />
      {textButton && (
        <Link
          onClick={() => textButton === "Sair" && loggout()}
          to={`${redirect}`}
        >
          {textButton}
        </Link>
      )}
    </HeaderPage>
  );
};

export default Header;
