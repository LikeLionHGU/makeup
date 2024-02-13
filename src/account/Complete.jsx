// import "./SignUp.css";
import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import headerimg from "./img/header3.png";
import icon from "./img/completeicon.png";
import Header from "../header/Header";
import styles from "./Complete.module.css";

const SignUp = () => {
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
      <Header></Header>
      <div className={styles.signup}>
        <div className={styles.signup_rect}>
          <div className={styles.signup_header}>
            <img src={headerimg} />
          </div>

          <div className={styles.content}>
            <div className={styles.icon}>
              <img src={icon} />
            </div>
            <h2>회원가입 완료</h2>
            <h4>회원님의 가입을 환영합니다.</h4>
          </div>

          <div className={styles.btn}>
            <Link to="/">
              <button onClick={registeraxios}>회원가입 완료</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
