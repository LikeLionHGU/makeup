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
import warningicon from "./img/warningicon.png";
import kakaologo from "./img/kakaologo.png";

import styles from "./LogIn.module.css";

// import login from "./img/login.png";

const LogIn = () => {
  const navigate = useNavigate();

  const [email, setEmailinput] = useState("");
  const [password, setPasswordinput] = useState("");
  const [success, setsuccessinput] = useState("");
  const [date, setdateinput] = useState("");
  const [memberId, setmemberId] = useState("");

  const [message, setMessage] = useState("");

  const loginaxios = (e) => {
    e.preventDefault();
    // 창이 새로고침되는 것을 막는다.

    fetch("https://api.zionhann.shop/app/makeup/auth/sign-in", {
      method: "POST",
      headers: {
        "Content-Type": `application/json`,
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.success) {
          console.log("local storage", result.data.memberId);
          localStorage.setItem(
            "member_id",
            JSON.stringify(result.data.memberId)
          );
          navigate("/");
        } else {
          setMessage(
            // { warningicon },
            "아이디 또는 비밀번호를 잘못 입력했습니다. 입력하신 내용을 다시 확인해주세요."
          );
        }
      })
      .catch((error) => {
        setMessage(error.response.data.message);
        console.log(">>>>>>", error.response);
      });
  };

  const LoginFunc = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <div className={styles.login}>
        <div className={styles.logo}>
          <Link to="/">
            <img src={logo}></img>
          </Link>
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
                  id="email"
                  value={email}
                  onChange={(e) => {
                    setEmailinput(e.target.value);
                    console.log(success);
                  }}
                  className={!message ? "inputLogin" : "err_email"}
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
                  id="password"
                  value={password}
                  onChange={(e) => {
                    setPasswordinput(e.target.value);
                  }}
                  className={!message ? "inputLogin" : "err_password"}
                  placeholder="비밀번호"
                />
              </span>
            </div>
            <div className={styles.warning}>
              <p>{message}</p>
            </div>
          </div>
        </div>
        <div className={styles.btn}>
          {/* <Link to="/"> */}
          <button className={styles.buttonlogin} onClick={loginaxios}>
            로그인
          </button>
          {/* </Link> */}
        </div>
        {/* <div className={styles.btn}>
          <button className={styles.buttonkakaologin} onClick={loginaxios}>
            <img src={kakaologo}></img>
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default LogIn;
