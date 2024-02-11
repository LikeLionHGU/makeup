import { BrowserRouter, Route, Routes } from "react-router-dom";
// import "./App.css";
import Main from "./Main";

import Login from "./header/login/Login";
import BoardWrite from "./write/BoardWrite";
import BoardList from "./board/BoardList";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/board" element={<BoardList />} />
          <Route path="/write" element={<BoardWrite />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
