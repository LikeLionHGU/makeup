import { BrowserRouter, Route, Routes } from "react-router-dom";
// import "./App.css";
import Main from "./Main";

import BoardWrite from "./write/BoardWrite";
import BoardList from "./board/BoardList";
import LogIn from "./account/LogIn";
import SignUp from "./account/SignUp";
import Register from "./account/Register";
import Calendar from "./calendar/Calendar";
import Complete from "./account/Complete";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<LogIn />}></Route>
          <Route path="/complete" element={<Complete />}></Route>
          <Route path="/calendar" element={<Calendar />}></Route>
          <Route path="/board" element={<BoardList />} />
          <Route path="/write" element={<BoardWrite />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
