import "./App.css";
import SIGNUPPAGE from "./SIGNUPPAGE";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LOGINPAGE from "./LOGINPAGE";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SIGNUPPAGE />}></Route>
          <Route path="/login" element={<LOGINPAGE />}></Route>
          <Route path="/signup" element={<SIGNUPPAGE />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
