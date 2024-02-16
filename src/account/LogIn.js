// import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import headerimg from "./img/header1.png";
import Header from "../header/Header";
import styles from "./LogIn.module.css";

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
      <Header></Header>
      <div className={styles.login}>
        <div className={styles.login_rect}>
          <div className={styles.login_header}>
            <img src={headerimg} />
          </div>
          <div className={styles.input}>
            <div className={styles.inputemail}>
              <br />
              <input
                type="text"
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
                className={!message ? "inputLogin" : "err_password"}
                placeholder="아이디(이메일)"
              />
            </div>

            <div className={styles.inputpassword}>
              <br />
              <input
                type="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                className={!message ? "inputLogin" : "err_password"}
                placeholder="비밀번호"
              />
              <p className="err">{message}</p>
            </div>

            <div className={styles.btn}>
              <button className={styles.buttonlogin} onClick={loginaxios}>
                로그인
              </button>
            </div>
            <br />
            <div className={styles.btn}>
              <Link to="/signup">
                <button className={styles.buttonsignup}>회원가입</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
