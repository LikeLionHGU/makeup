// import "./SignUp.css";
import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

import logo from "./img/logo.png";
import signuprect from "./img/signinrect.png";

import styles from "./SignUp.module.css";

const SignUp = () => {
  const navigate = useNavigate();

  const [usernameinput, setUsernameinput] = useState("");
  const [emailinput, setEmailinput] = useState("");
  const [passwordinput, setPasswordinput] = useState("");
  const [nameinput, setNameinput] = useState("");
  const [phonenumberinput, setPhonenumberinput] = useState("");
  const [genderinput, setGenderinput] = useState("");
  const [birthdateinput, setBirthdateinput] = useState("");

  const [message, setMessage] = useState("");

  const registeraxios = () => {
    fetch("http://localhost:8080/auth/sign-up", {
      method: "POST",
      body: JSON.stringify({
        username: usernameinput,
        email: emailinput,
        password: passwordinput,
        name: nameinput,
        phonenumber: phonenumberinput,
        birthdate: birthdateinput,
        gender: genderinput,
      }),
    })
      .then((response) => response.json())
      .then((result) => console.log("결과: ", result));
    // axios
    //   .post("http://localhost:8080/auth/sign-up", {
    //     username: usernameinput,
    //     email: emailinput,
    //     password: passwordinput,
    //     name: nameinput,
    //     phonenumber: phonenumberinput,
    //     birthdate: birthdateinput,
    //     gender: genderinput,
    //   })
    //   .then(function (response) {
    //     console.log(response);
    //     alert("회원가입성공");
    //     if (response.data.code == 0) {
    //       return navigate("/complete");
    //     }
    //   })
    //   .catch(function (err) {
    //     setMessage(err.response.data.message);
    //     console.log(err);
    //   });
  };

  return (
    <div>
      <div className={styles.signup}>
        <div className={styles.logo}>
          <img src={logo}></img>
        </div>
        <div className={styles.signup_rect}>
          <img src={signuprect}></img>
          <div className={styles.input}>
            <div className={styles.signup_input}>
              <input
                type="text"
                placeholder="아이디(이메일)"
                onChange={(e) => {
                  setEmailinput(e.target.value);
                }}
                className={!message ? "inputLogin" : "err_password"}
              />
              <p>{message}</p>
            </div>

            <div className={styles.signup_input}>
              <input
                type="password"
                placeholder="비밀번호(8~20자 영문, 숫자, 특수문자 조합)"
                onChange={(e) => {
                  setPasswordinput(e.target.value);
                }}
                className={!message ? "inputLogin" : "err_password"}
              />
              <p>{message}</p>
            </div>

            <div className={styles.signup_input}>
              <input
                type="name"
                placeholder="이름"
                onChange={(e) => {
                  setPasswordinput(e.target.value);
                }}
                className={!message ? "inputLogin" : "err_name"}
              />
              <p>{message}</p>
            </div>

            <div className={styles.signup_input}>
              <input
                type="username"
                placeholder="닉네임"
                onChange={(e) => {
                  setPasswordinput(e.target.value);
                }}
                className={!message ? "inputLogin" : "username"}
              />
              <p>{message}</p>
            </div>

            <div className={styles.signup_input}>
              <input
                type="birthdate"
                placeholder="생년월일(8자리)"
                onChange={(e) => {
                  setBirthdateinput(e.target.value);
                }}
                className={!message ? "inputLogin" : "err_birthdate"}
              />
            </div>

            <div className={styles.signup_input}>
              <div className={styles.radio}>
                <div className={styles.gender}>
                  <input
                    type="radio"
                    name="gender"
                    onChange={(e) => {
                      console.log(false);
                      setGenderinput(e.target.value);
                    }}
                    className={
                      !message && genderinput === "female"
                        ? "inputLogin"
                        : "err_gender"
                    }
                    value="female"
                    id="female"
                  />
                  <label for="female">여성</label>
                  <input
                    type="radio"
                    name="gender"
                    onChange={(e) => {
                      console.log(true);
                      setGenderinput(e.target.value);
                    }}
                    className={!message ? "inputLogin" : "err_gender"}
                    value="male"
                    id="male"
                  />
                  <label for="male">남성</label>
                </div>
              </div>
            </div>

            <div className={styles.signup_input}>
              <input
                type="phonenumber"
                placeholder="휴대폰 번호"
                onChange={(e) => {
                  setPasswordinput(e.target.value);
                }}
                className={!message ? "inputLogin" : "err_phonenumber"}
              />
              <p>{message}</p>
            </div>
          </div>

          <div className={styles.btn}>
            {/* <Link to="/complete"> */}
            <button onClick={registeraxios}>회원정보 등록</button>
            {/* </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
