// import "./SignUp.css";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Header from "../header/Header";
import styles from "./SignUp.module.css";

const SignUp = () => {
  const navigate = useNavigate();

  const [usernameinput, setUsernameinput] = useState("");
  const [emailinput, setEmailinput] = useState("");
  const [passwordinput, setPasswordinput] = useState("");
  const [genderinput, setGenderinput] = useState("");
  const [birthdateinput, setBirthdateinput] = useState("");

  const [message, setMessage] = useState("");

  const registeraxios = () => {
    axios
      .post("/users/signup", {
        username: usernameinput,
        email: emailinput,
        password: passwordinput,
        birthdate: birthdateinput,
        gender: genderinput,
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
          <div className={styles.signup_button}>
            <div className={styles.rect}></div>
            <div className={styles.arrow}></div>
          </div>
          <div className={styles.signup_input}>
            <label>화알못에서 사용할 닉네임을 알려주세요</label>
            <br />
            <input
              type="text"
              placeholder="username..."
              onChange={(e) => {
                setUsernameinput(e.target.value);
              }}
            />
            <p>
              한글, 영문, 숫자(2~10자) <br />
              닉네임은 피드, 댓글 작성 등 활동을 할 때 표시됩니다. <br />
              닉네임은 한 번 정하면 변경할 수 없습니다.
            </p>
          </div>

          <div className="signup_input">
            <label>Email</label>
            <br />
            <input
              type="text"
              placeholder="email..."
              onChange={(e) => {
                setEmailinput(e.target.value);
              }}
              className={!message ? "inputLogin" : "err_password"}
            />
          </div>

          <div className="signup_input">
            <label>비밀번호</label>
            <br />
            <input
              type="password"
              placeholder="password..."
              onChange={(e) => {
                setPasswordinput(e.target.value);
              }}
              className={!message ? "inputLogin" : "err_password"}
            />
            <p>{message}</p>
          </div>

          <div className="signup_input">
            <label>생년월일</label>
            <br />
            <input
              type="birthdate"
              placeholder="xxxxxxxx"
              onChange={(e) => {
                setBirthdateinput(e.target.value);
              }}
              className={!message ? "inputLogin" : "err_birthdate"}
            />
          </div>

          <div className="signup_input">
            <label>성별</label>
            <br />
            <label>남성</label>
            <input
              type="radio"
              name="gender"
              onChange={(e) => {
                console.log(true);
                setGenderinput(e.target.value);
              }}
              className={!message ? "inputLogin" : "err_gender"}
              value="male"
            />
            <br />
            <label>여성</label>
            <input
              type="radio"
              name="gender"
              onChange={(e) => {
                console.log(false);
                setGenderinput(e.target.value);
              }}
              className={!message ? "inputLogin" : "err_gender"}
              value="female"
            />
          </div>
          <button onClick={registeraxios}>singup</button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

// import React, { useState, useEffect } from "react";

// const useInput = (defaultValue) => {
//   const [value, setValue] = useState(defaultValue);
//   const onChange = (e) => {
//     setValue(e.target.value);
//   };
//   return {
//     value,
//     onChange,
//   };
// };

// const validate = (input) => {
//   const { userid, password, email, gender, age } = input;
//   const errors = {};

//   if (userid === "") {
//     errors.userid = "사용자명이 입력되지 않았습니다.";
//   } else if (userid.length > 8) {
//     errors.userid = "사용자명은 8자 이하로 입력해야 합니다.";
//   }

//   if (!password) {
//     errors.password = "비밀번호가 입력되지 않았습니다.";
//   } else if (password.length < 8) {
//     errors.password = "8자 이상의 패스워드를 사용해야 합니다.";
//   }

//   if (email === "") {
//     errors.email = "이메일이 입력되지 않았습니다.";
//   } else if (!/^[a-z0-9%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i.test(email)) {
//     errors.email = "입력된 이메일이 유효하지 않습니다.";
//   }

//   if (gender === "") {
//     errors.gender = "성별이 입력되지 않았습니다.";
//   }
//   if (age === "") {
//     errors.age = "나이가 입력되지 않았습니다.";
//   } else if (age < 1 || age > 120) {
//     errors.age = "나이가 이상해요.";
//   }

//   return errors;
// };

// const SignUp = () => {
//   const id = useInput("");
//   const pw = useInput("");
//   const email = useInput("");
//   const gender = useInput("");
//   const age = useInput("");
//   const [submit, setSubmit] = useState(false);
//   const [errors, setErrors] = useState({});

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setSubmit(true);

//     const input = {
//       userid: id.value,
//       password: pw.value,
//       email: email.value,
//       gender: gender.value,
//       age: age.value,
//     };

//     setErrors(validate(input));
//   };

//   useEffect(() => {
//     if (submit) {
//       if (Object.keys(errors).length === 0) {
//         alert("회원가입이 완료되었습니다.");
//       }
//       setSubmit(false);
//     }
//   }, [errors]);

//   return (
//     <form onSubmit={handleSubmit}>
//       <h2>회원가입</h2>
//       <ul>
//         <li>
//           <label htmlFor="userid">아이디</label>
//           <input type="text" name="userid" {...id} />
//           {errors.userid && <span>{errors.userid}</span>}
//         </li>
//         <li>
//           <label htmlFor="password">패스워드</label>
//           <input type="password" name="password" {...pw} />
//           {errors.password && <span>{errors.password}</span>}
//         </li>
//         <li>
//           <label htmlFor="email">이메일</label>
//           <input type="email" name="email" {...email} />
//           {errors.email && <span>{errors.email}</span>}
//         </li>
//         <li>
//           <label htmlFor="gender">성별</label>
//           <input type="radio" name="gender" value="여자" {...gender} />
//           <label htmlFor="여자">여자</label>
//           <input type="radio" name="gender" value="남자" {...gender} />
//           <label htmlFor="남자">남자</label>
//           {errors.gender && <span>{errors.gender}</span>}
//         </li>
//         <li>
//           <input type="submit" value="가입" disabled={submit} />
//         </li>
//       </ul>
//     </form>
//   );
// };

// export default SignUp;
