import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import { HeaderPage } from "./style";
import { motion } from "framer-motion";

const Header = ({ textButton, redirect }) => {
  const { loggout } = useContext(UserContext);

  return (
    <HeaderPage textButton={textButton}>
      <motion.div
        initial={{ x: -150, y: -100, opacity: 0 }}
        animate={{ x: 0, y: 0, opacity: 1 }}
        transition={{ duration: 0.9 }}
      >
        <img src="./assets/Logo.svg" alt="Logo" />
      </motion.div>
      <motion.div
        initial={{ x: 150, y: -100, opacity: 0 }}
        animate={{ x: 0, y: 0, opacity: 1 }}
        transition={{ duration: 0.9 }}
      >
        {textButton && (
          <Link
            onClick={() => textButton === "Sair" && loggout()}
            to={`${redirect}`}
          >
            {textButton}
          </Link>
        )}
      </motion.div>
    </HeaderPage>
  );
};

export default Header;
