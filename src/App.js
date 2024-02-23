import { BrowserRouter, Route, Routes } from "react-router-dom";
// import "./App.css";
import Main from "./Main";

import "./calendar/Calendarr.module.css";

import BoardWrite from "./write/BoardWrite";
import BoardList from "./board/BoardList";
import LogIn from "./account/LogIn";
import SignUp from "./account/SignUp";

// import Register from "./account/Register";

import Complete from "./account/Complete";
import Calendarr from "./calendar/Calendarr";
import MentoCalendar from "./calendarMento/MentoCalendar";
import UploadPost from "./uploadPost/UploadPost";
import { Grid } from "swiper/modules";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/login" element={<LogIn />}></Route>

          <Route path="/complete" element={<Complete />}></Route>
          <Route path="/calendar" element={<Calendarr />}></Route>
          <Route path="/calendarmento" element={<MentoCalendar />}></Route>

          <Route path="/board" element={<BoardList />} />
          <Route path="/write" element={<BoardWrite />} />
          <Route path="/uploadPost/:postId" element={<UploadPost />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
