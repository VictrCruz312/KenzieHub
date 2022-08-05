import { useState } from "react";
import "./App.css";
import RoutesMain from "./routes";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [loading, setLoading] = useState(false);
  const [userInfo, setUserInfo] = useState("");

  const notify = (type, message) => {
    type === "error" && toast.error(message);
    type === "success" && toast.success(message);
    type === "warning" && toast.warn(message);
  };

  return (
    <div className="App">
      <RoutesMain
        setUserInfo={setUserInfo}
        userInfo={userInfo}
        setLoading={setLoading}
        loading={loading}
        notify={notify}
      />
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;
