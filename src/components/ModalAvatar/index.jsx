import { useUserContext } from "../../contexts/UserContext/UserContext";
import { Modals } from "../../styles/Modals/style";
import { AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion";
import { useState } from "react";
import { api } from "../../services/api";

const ModalAvatar = () => {
  const { navigate } = useUserContext();

  const ExitModal = () => {
    navigate("/");
  };

  const [file, setFile] = useState();

  const handleFunction = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("avatar", file);
    const config = {
      headers: {
        "content-type": "multipart/form-data",
        Authorization: `Bearer ${localStorage.getItem("@TOKEN")}`,
      },
    };
    api
      .patch("users/avatar", formData, config)
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error));
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.9 }}
    >
      <Modals>
        <div className="containerModal">
          <div className="navigationModal">
            <h1>Editar foto do perfil</h1>
            <button onClick={() => ExitModal()}>
              <AiOutlineClose />
            </button>
          </div>
          <form className="form" onSubmit={handleSubmit}>
            <label htmlFor="file">Escolha a imagem no seu computador</label>
            <input
              style={{ margin: "0 auto", cursor: "pointer" }}
              id="file"
              type="file"
              onChange={handleFunction}
            />
            <div className="containerButton">
              <button type="submit">Carregar</button>
            </div>
          </form>
        </div>
      </Modals>
    </motion.div>
  );
};

export default ModalAvatar;
