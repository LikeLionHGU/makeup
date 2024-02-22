// import "./SignUp.css";
import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

import icon from "./img/completeicon.png";
import logo from "./img/logo.png";
import loginrect from "./img/loginrect.png";

import styles from "./Complete.module.css";

const Complete = () => {
  const navigate = useNavigate();

  const [usernameinput, setUsernameinput] = useState("");

  const [message, setMessage] = useState("");

  const registeraxios = () => {
    axios
      .post("/users/signup", {
        username: usernameinput,
      })
      .then((response) => {
        console.log(response);
        alert("회원가입성공");
        if ((response.status = 200)) {
          return navigate("/mylogin");
        }
      })
      .catch((err) => {
        setMessage(err.response.data.message);
        console.log(err);
      });
  };

  return (
    <div>
      <div className={styles.signup}>
        <div className={styles.signup_header}>
          <img src={logo}></img>
        </div>

        <div className={styles.content}>
          <img src={loginrect}></img>
          <div className={styles.rect}>
            <div className={styles.icon}>
              <img src={icon} />
            </div>
            <h3>회원가입 완료</h3>
            <p>메이크어스의 다양한 서비스와 혜택을 누리세요.</p>

            <div className={styles.btn}>
              <Link to="/login">
                <button onClick={registeraxios}>
                  로그인 페이지로 돌아가기
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Complete;
