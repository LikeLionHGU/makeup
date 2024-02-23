// import "./SignUp.css";
import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

import logo from "./img/logo.png";
import signuprect from "./img/signinrect.png";

import styles from "./SignUp.module.css";

const SignUp = () => {
  const navigate = useNavigate();

  const [userNicknameinput, setUserNicknameinput] = useState("");
  const [emailinput, setEmailinput] = useState("");
  const [passwordinput, setPasswordinput] = useState("");
  const [usernameinput, setUserNameinput] = useState("");
  const [phoneNumberinput, setPhoneNumberinput] = useState("");
  const [genderinput, setGenderinput] = useState("");
  const [birthYearinput, setBirthYearinput] = useState("");

  const [message, setMessage] = useState("");
  const [emailMessage, setEmailMessage] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");
  const [birthYearMessage, setBirthYearMessage] = useState("");

  const [isEmail, setIsEmail] = useState("");
  const [isPassword, setIsPassword] = useState("");
  const [isBirthYear, setIsBirthYear] = useState("");

  const onChangeEmail = (e) => {
    const currentEmail = e.target.value;
    setEmailinput(currentEmail);
    const emailRegExp =
      /^[A-Za-z0-9_]+[A-Za-z0-9]*[@]{1}[A-Za-z0-9]+[A-Za-z0-9]*[.]{1}[A-Za-z]{1,3}$/;

    if (!emailRegExp.test(currentEmail)) {
      setEmailMessage("올바른 이메일 주소를 입력해 주세요.");
      setIsEmail(false);
    } else {
      setEmailMessage("");
      setIsEmail(true);
    }
  };

  const onChangePassword = (e) => {
    const currentPassword = e.target.value;
    setPasswordinput(currentPassword);
    const passwordRegExp = /^[a-zA-Z][a-zA-Z0-9_-]{7,19}$/;

    if (!passwordRegExp.test(currentPassword)) {
      setPasswordMessage("비밀번호는 8~20자 이내로 입력하셔야 합니다.");
      setIsPassword(false);
    } else {
      setPasswordMessage("");
      setIsPassword(true);
    }
  };

  const onChangeBirthYear = (e) => {
    const currentBirthYear = e.target.value;
    setEmailinput(currentBirthYear);
    const birthYearRegExp = /^[0-9]{8}$/;

    if (!birthYearRegExp.test(currentBirthYear)) {
      setBirthYearMessage("올바른 생년월일 8자리를 입력해 주세요.");
      setIsBirthYear(false);
    } else {
      setEmailMessage("");
      setIsBirthYear(true);
    }
  };

  const registeraxios = () => {
    // console.log(12345678);
    fetch("https://api.zionhann.shop/app/makeup/auth/sign-up", {
      method: "POST",
      headers: {
        "Content-Type": `application/json`,
      },
      body: JSON.stringify({
        userNickname: userNicknameinput,
        email: emailinput,
        password: passwordinput,
        username: usernameinput,
        phoneNumber: phoneNumberinput,
        birthYear: birthYearinput,
        gender: genderinput,
      }),
    })
      .then((response) => response.json())
      .then((result) => console.log("결과: ", result));
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
                type="email"
                id="email"
                value={emailinput}
                placeholder="아이디(이메일)"
                onChange={
                  ((e) => {
                    setEmailinput(e.target.value);
                  },
                  onChangeEmail)
                }
              />
              <p className="message"> {emailMessage} </p>
            </div>

            <div className={styles.signup_input}>
              <input
                type="password"
                id="password"
                value={passwordinput}
                placeholder="비밀번호(8~20자 영문, 숫자, 특수문자 조합)"
                onChange={
                  ((e) => {
                    setPasswordinput(e.target.value);
                  },
                  onChangePassword)
                }
              />
              <p className="message"> {passwordMessage} </p>
            </div>

            <div className={styles.signup_input}>
              <input
                type="username"
                id="username"
                value={usernameinput}
                placeholder="이름"
                onChange={(e) => {
                  setUserNameinput(e.target.value);
                }}
                className={!message ? "inputLogin" : "username"}
              />
            </div>

            <div className={styles.signup_input}>
              <input
                type="userNickname"
                id="userNickname"
                value={userNicknameinput}
                placeholder="닉네임"
                onChange={(e) => {
                  setUserNicknameinput(e.target.value);
                }}
                className={!message ? "inputLogin" : "userNickname"}
              />
            </div>

            <div className={styles.signup_input}>
              <input
                type="text"
                id="birthYear"
                value={birthYearinput}
                placeholder="생년월일(8자리)"
                onChange={(e) => {
                  setBirthYearinput(e.target.value);
                }}
                className={!message ? "inputLogin" : "err_birthdate"}
              />
              {/* <p className="message"> {birthYearMessage} </p> */}
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
                    value="여성"
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
                    // value="male"
                    value="남성"
                    id="male"
                  />
                  <label for="male">남성</label>
                </div>
              </div>
            </div>

            <div className={styles.signup_input}>
              <input
                type="phoneNumber"
                placeholder="휴대폰 번호"
                onChange={(e) => {
                  setPhoneNumberinput(e.target.value);
                }}
                className={!message ? "inputLogin" : "err_phoneNumber"}
              />
              <p>{message}</p>
            </div>
          </div>

          <div className={styles.btn}>
            <Link to="/complete">
              <button
                type="submit"
                disabled={
                  !userNicknameinput ||
                  !emailinput ||
                  !passwordinput ||
                  !usernameinput ||
                  !phoneNumberinput ||
                  !birthYearinput ||
                  !genderinput
                }
                onClick={registeraxios}
              >
                회원정보 등록
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
