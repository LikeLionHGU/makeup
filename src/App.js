import { BrowserRouter, Route, Routes } from "react-router-dom";
// import "./App.css";
import Main from "./Main";

import Login from "./header/login/Login";
import SignUp from "./account/SignUp";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
