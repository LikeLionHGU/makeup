import { BrowserRouter, Route, Routes } from "react-router-dom";
// import "./App.css";
import Main from "./Main";

import "./calendar/calendar.module.scss";

import BoardWrite from "./write/BoardWrite";
import BoardList from "./board/BoardList";
import LogIn from "./account/LogIn";
import SignUp from "./account/SignUp";
import Complete from "./account/Complete";
import Calendar from "./calendar/Calendar.tsx";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/login" element={<LogIn />}></Route>
          <Route path="/complete" element={<Complete />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/board" element={<BoardList />} />
          <Route path="/write" element={<BoardWrite />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
