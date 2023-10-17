import "./App.css";
import SIGNUPPAGE from "./SIGNUPPAGE";
import { HashRouter, Route, Routes } from "react-router-dom";
import LOGINPAGE from "./LOGINPAGE";

function App() {
  return (
    <div>
      <HashRouter>
        <Routes>
          <Route path="/" element={<SIGNUPPAGE />}></Route>
          <Route path="/login" element={<LOGINPAGE />}></Route>
          <Route path="/signup" element={<SIGNUPPAGE />}></Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
