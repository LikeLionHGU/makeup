// import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
// import Header from "../header/Header";
import LoginInnerRect from "./img/logininnerrect.png";

import logo from "./img/logo.png";
import LoginRect from "./img/loginrect.png";
import emailicon from "./img/emailicon.png";
import pwicon from "./img/pwicon.png";
import kakaologo from "./img/kakaologo.png";

import styles from "./LogIn.module.css";

// import login from "./img/login.png";

const LogIn = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [message, setMessage] = useState("");

  const loginaxios = (e) => {
    e.preventDefault();
    // 창이 새로고침되는 것을 막는다.

    fetch("http://localhost:8080/auth/sign-up", {
      method: "POST",
      body: {
        username: username,
        password: password,
      },
    })
      .then((response) => response.json)
      .then((result) => console.log("결과: ", result));

    // axios
    //   .post("/login", {
    //     username: username,
    //     password: password,
    //   })
    //   .then((response) => {
    //     localStorage.setItem("Token", response.headers.authorization);
    //     console.log(response);
    //     if ((response.status = 200)) {
    //       return navigate("/posts");
    //     }
    //   })
    //   .catch((err) => {
    //     setMessage(err.response.data.message);
    //     console.log(err);
    //   });
  };

  return (
    <div>
      <div className={styles.login}>
        <div className={styles.logo}>
          <img src={logo}></img>
        </div>
        <div className={styles.login_rect}>
          <img src={LoginRect}></img>
          <div className={styles.rect}>
            <div className={styles.signupbtn}>
              <Link to="/signup">
                <button className={styles.buttonsignup}>회원가입</button>
              </Link>
            </div>
            <div className={styles.input_rect}>
              <span className={styles.inputicon}>
                <img src={emailicon}></img>
              </span>
              <span className={styles.inputemail}>
                <input
                  type="text"
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                  className={!message ? "inputLogin" : "err_password"}
                  placeholder="아이디(이메일)"
                />
              </span>
            </div>

            <div className={styles.input_rect}>
              <span className={styles.inputicon}>
                <img src={pwicon}></img>
              </span>
              <span className={styles.inputpassword}>
                <input
                  type="password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  className={!message ? "inputLogin" : "err_password"}
                  placeholder="비밀번호"
                />
                <p className={styles.err}>{message}</p>
              </span>
            </div>
          </div>
        </div>
        <div className={styles.btn}>
          <button className={styles.buttonlogin} onClick={loginaxios}>
            로그인
          </button>
        </div>
        <div className={styles.btn}>
          <button className={styles.buttonkakaologin} onClick={loginaxios}>
            <img src={kakaologo}></img>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
