// import "./Login.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const Login = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [message, setMessage] = useState("");

  const loginaxios = (e) => {
    e.preventDefault();
    // 창이 새로고침되는 것을 막는다.

    axios
      .post("/login", {
        username: username,
        password: password,
      })
      .then((response) => {
        localStorage.setItem("Token", response.headers.authorization);
        console.log(response);
        if ((response.status = 200)) {
          return navigate("/posts");
        }
      })
      .catch((err) => {
        setMessage(err.response.data.message);
        console.log(err);
      });
  };

  return (
    <div>
      <div className="Login">
        <div className="inputemail">
          <label>username</label>
          <br />
          <input
            type="text"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            className={!message ? "inputLogin" : "err_password"}
            placeholder="username..."
          />
        </div>
        <div className="inputpassword">
          <label>password</label>
          <br />
          <input
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className={!message ? "inputLogin" : "err_password"}
            placeholder="password..."
          />
          <p className="err">{message}</p>
        </div>
        <button className="buttonlogin" onClick={loginaxios}>
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
