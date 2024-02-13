// import "./SignUp.css";
import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import headerimg from "./img/header2.png";
import Header from "../header/Header";
import styles from "./Register.module.css";

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
          <div className={styles.signup_input}>
            <h1>화알못에서 사용할 닉네임을 알려주세요</h1>
            <br />
            <input
              type="text"
              placeholder=""
              onChange={(e) => {
                setUsernameinput(e.target.value);
              }}
            />
            <p>
              한글, 영문, 숫자(2~10자) <br />
              닉네임은 피드, 댓글 작성 등 활동을 할 때 표시됩니다. <br />
              닉네임은 한 번 정하면 변경할 수 없습니다.
            </p>
            <div className={styles.btn}>
              <Link to="/complete">
                <button onClick={registeraxios}>회원가입 완료</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
