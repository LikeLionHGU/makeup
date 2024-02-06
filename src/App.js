import { BrowserRouter, Route, Routes } from "react-router-dom";
// import "./App.css";
import Main from "./mainpage/Main";
import Banner from "./banner/Banner";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}></Route>
        </Routes>
        <Routes>
          <Route path="/" element={<Banner />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
