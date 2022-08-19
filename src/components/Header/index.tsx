import { Link } from "react-router-dom";
import { HeaderPage } from "./style";
import { motion } from "framer-motion";
import { useTechContext } from "../../contexts/TechsContext/TechsContext";

interface IHeaderProps {
  textButton?: any;
  redirect?: string;
}

const Header = ({ textButton, redirect }: IHeaderProps) => {
  const { loggout } = useTechContext();

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
