import { useState } from "react";
import "./App.css";
import RoutesMain from "./routes";

function App() {
  const [loading, setLoading] = useState(false);
  const [userInfo, setUserInfo] = useState(false);

  return (
    <div className="App">
      <RoutesMain
        setUserInfo={setUserInfo}
        userInfo={userInfo}
        setLoading={setLoading}
        loading={loading}
      />
    </div>
  );
}

export default App;
